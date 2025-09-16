import fs from 'fs';
import path from 'path';

// Paths
const tracksPath = path.resolve('src/data/languageTracks.ts');
const dataPath = path.resolve('src/data/topicData.ts');

// Read files
const tracksContent = fs.readFileSync(tracksPath, 'utf8');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Extract all topics from languageTracks
const trackTopicMatches = [...tracksContent.matchAll(/topics:\s*\[([\s\S]*?)\]/g)];
const allTopics = new Set();
trackTopicMatches.forEach(match => {
  const topicsBlock = match[1];
  const names = topicsBlock.match(/'([^']+)'/g) || [];
  names.forEach(raw => allTopics.add(raw.slice(1, -1)));
});

// Extract existing keys from topicData
const dataKeyMatches = [...dataContent.matchAll(/"([^"]+)":\s*\{/g)];
const existingTopics = new Set(dataKeyMatches.map(m => m[1]));

// Determine missing
const missingTopics = [...allTopics].filter(t => !existingTopics.has(t));
if (missingTopics.length === 0) {
  console.log('No missing topics. topicData.ts is up-to-date.');
  process.exit(0);
}

// Build stub entries
const stubEntries = missingTopics
  .sort()
  .map(topic => `  "${topic}": {
    name: "${topic}",
    description: "",
    theory: "",
    syntax: "",
    example: ""
  }`)
  .join(',\n');

// Insert stubs before final closing of topicData object
const insertMarker = '};\n\nexport default topicData;';
const [before, after] = dataContent.split(insertMarker);
const newData = before.trimEnd() + ',\n\n  // Auto-generated stubs for missing topics\n' + stubEntries + '\n' + insertMarker;

// Write back
fs.writeFileSync(dataPath, newData, 'utf8');
console.log(`Inserted ${missingTopics.length} stub topics into topicData.ts`);
