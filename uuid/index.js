const uuid5 = require("uuid/v5");
const uuid4 = require("uuid/v4");
const NAMESPACE = "925b32a0-972f-45c1-a784-e2a49fe3d919";

const uuid = (seed = uuid4(), namespace = NAMESPACE) => {
  const hash = uuid5(seed, namespace);
  return hash;
};


module.exports = { uuid };
