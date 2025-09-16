import fs from 'fs';

// Read the topicData file
const content = fs.readFileSync('src/data/topicData.ts', 'utf8');

// Extract all topic keys
const keyMatches = [...content.matchAll(/"([^"]+)":\s*{/g)];
const topicKeys = keyMatches.map(match => match[1]);

console.log('Topics defined in topicData.ts:');
console.log('===============================');
topicKeys.sort().forEach(topic => console.log(topic));
console.log(`\nTotal topics in topicData: ${topicKeys.length}`);
