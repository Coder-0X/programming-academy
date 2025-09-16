import fs from 'fs';

// Read both files
const tracksContent = fs.readFileSync('src/data/languageTracks.ts', 'utf8');
const topicDataContent = fs.readFileSync('src/data/topicData.ts', 'utf8');

// Extract topics from language tracks
const topicMatches = [...tracksContent.matchAll(/topics:\s*\[([\s\S]*?)\]/g)];
const allTopicsFromTracks = new Set();

topicMatches.forEach(match => {
  const topicsString = match[1];
  const topics = topicsString.match(/'([^']+)'/g);
  if (topics) {
    topics.forEach(topic => {
      const cleanTopic = topic.replace(/'/g, '');
      allTopicsFromTracks.add(cleanTopic);
    });
  }
});

// Extract topics from topicData
const keyMatches = [...topicDataContent.matchAll(/"([^"]+)":\s*{/g)];
const topicsInData = new Set(keyMatches.map(match => match[1]));

// Find missing topics
const missingTopics = [...allTopicsFromTracks].filter(topic => !topicsInData.has(topic));

console.log('Missing topics from topicData.ts:');
console.log('==================================');
missingTopics.sort().forEach(topic => console.log(topic));
console.log(`\nTotal missing topics: ${missingTopics.length}`);

// Also show what we have
console.log('\n\nTopics already in topicData.ts:');
console.log('================================');
[...topicsInData].sort().forEach(topic => console.log(topic));
console.log(`\nTotal existing topics: ${topicsInData.size}`);
