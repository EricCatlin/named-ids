const { uuid } = require("../uuid");
const { hash } = require("../hash");
const { nouns, adverbs, adjectives, verbs } = require("../vocabulary");

const getNamedId = (id, namespace) => {
  const seededUUID = uuid(''+id, namespace);
  const idParts = seededUUID.split("-");
  const hashes = idParts.map(i => hash(i));
  
  const number = (hash(seededUUID) % 100) + 1;

  const noun = nouns[hashes[0] % nouns.length];
  const adverb = adverbs[hashes[1] % adverbs.length];
  const adjective = adjectives[hashes[2] % adjectives.length];
  const verb = verbs[hashes[3] % verbs.length];
  return `${number} ${adjective} ${noun} ${verb} ${adverb}`;
};

module.exports = { getNamedId };
