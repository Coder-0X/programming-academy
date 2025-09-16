import fs from 'fs';

// Read the languageTracks file
const content = fs.readFileSync('src/data/languageTracks.ts', 'utf8');

// Extract all topics using regex
const topicMatches = [...content.matchAll(/topics:\s*\[([\s\S]*?)\]/g)];
const allTopics = new Set();

topicMatches.forEach(match => {
  const topicsString = match[1];
  const topics = topicsString.match(/'([^']+)'/g);
  if (topics) {
    topics.forEach(topic => {
      const cleanTopic = topic.replace(/'/g, '');
      allTopics.add(cleanTopic);
    });
  }
});

console.log('All unique topics from language tracks:');
console.log('=====================================');
const sortedTopics = Array.from(allTopics).sort();
sortedTopics.forEach(topic => console.log(topic));
console.log(`\nTotal topics: ${sortedTopics.length}`);
