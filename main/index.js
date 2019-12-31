const { uuid } = require("../uuid");
const { hash } = require("../hash");
const { nouns, adjectives /*verbs, adverbs*/ } = require("../vocabulary");

const getNamedId = (id = uuid(), namespace) => {
  const { adjective, noun /*verb, adverb,number*/ } = getNameIdParts(
    id,
    namespace
  );
  return `${adjective} ${noun}` /*${verb} ${adverb} ${number}*/;
};

const getNameIdParts = (id = uuid(), namespace) => {
  const seededUUID = uuid("" + id, namespace);
  const idParts = seededUUID.split("-");
  const hashes = idParts.map(i => hash(i));

  // const number = (hash(seededUUID) % 100) + 1;

  const noun = nouns[hashes[0] % nouns.length];
  // const adverb = adverbs[hashes[1] % adverbs.length];
  const adjective = adjectives[hashes[2] % adjectives.length];
  //  const verb = verbs[hashes[3] % verbs.length];
  return { adjective, noun /*verb, adverb, number*/ };
};

module.exports = { getNamedId, getNameIdParts };
