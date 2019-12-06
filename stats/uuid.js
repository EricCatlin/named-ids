const uuidv4 = require("uuid/v4");
const { stats } = require("./utils");
const { hash } = require("../hash");
const { nouns, adverbs, adjectives, verbs } = require("../vocabulary");
const results = [];
const tests = 100000;

for (var i = 0; i < tests; i++) {
  results.push(uuidv4());
}

const hashes = results.map(i => hash(i));
const modded = hashes.map(i => i % 100);

const counts = modded.reduce(
  (c, i) => Object.assign(c, { [i]: c[i] ? c[i] + 1 : 1 }),
  {}
);

const dirivitive = Object.values(counts).reduce(
  (c, i) => Object.assign(c, { [i]: c[i] ? c[i] + 1 : 1 }),
  {}
);

const dirivitive2 = Object.values(dirivitive).reduce(
  (c, i) => Object.assign(c, { [i]: c[i] ? c[i] + 1 : 1 }),
  {}
);

const { min, max, average, spread } = stats(modded);
const possibleResults =
  nouns.length * adverbs.length * verbs.length * adjectives.length * 100;
console.dir({ min, max, average, spread, dirivitive2, possibleResults });
