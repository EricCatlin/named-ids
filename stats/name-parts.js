const { getNameIdParts } = require("../main");
const { nouns, adverbs, adjectives, verbs } = require("../vocabulary");

const results = [];
const tests = 10000;

for (var i = 0; i < tests; i++) {
  results.push("abcdefghijklmnopqrstuvwxyz" + i);
}

const parts = results.map(i => getNameIdParts(i));

const counts = parts.reduce(
  (c, i) => {
    c.nouns[i.noun] = c.nouns[i.noun] ? c.nouns[i.noun] + 1 : 1;
    c.adverbs[i.adverb] = c.adverbs[i.adverb] ? c.adverbs[i.adverb] + 1 : 1;
    c.adjectives[i.adjective] = c.adjectives[i.adjective]
      ? c.adjectives[i.adjective] + 1
      : 1;
    c.verbs[i.verb] = c.verbs[i.verb] ? c.verbs[i.verb] + 1 : 1;
    return c;
  },
  { nouns: {}, adverbs: {}, adjectives: {}, verbs: {} }
);

const setStats = {
  nounsTotal: nouns.length,
  verbsTotal: verbs.length,
  adjectivesTotal: adjectives.length,
  adverbsTotal: adverbs.length,
  nounsExpected: tests / nouns.length,
  verbsExpected: tests / verbs.length,
  adjectivesExpected: tests / adjectives.length,
  adverbsExpected: tests / adverbs.length
};

console.log({ setStats, counts });
// const dirivitive = Object.values(counts).reduce(
//   (c, i) => Object.assign(c, { [i]: c[i] ? c[i] + 1 : 1 }),
//   {}
// );

// const dirivitive2 = Object.values(dirivitive).reduce(
//   (c, i) => Object.assign(c, { [i]: c[i] ? c[i] + 1 : 1 }),
//   {}
// );

// const min = Math.min(...modded);
// const max = Math.max(...modded);
// const spread = max - min;
// const average = modded.reduce((a, b) => a + b, 0) / modded.length;
// const possibleResults =
//   nouns.length * adverbs.length * verbs.length * adjectives.length * 100;
// console.dir({ min, max, average, spread, dirivitive2, possibleResults });
