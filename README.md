# Named Ids

---

[![Actions Status](https://github.com/EricCatlin/named-ids/workflows/Semantic%20Release/badge.svg?branch=release)](https://github.com/EricCatlin/named-ids/actions)


Makes generating one-way randomized-but-readable identifiers easy.  


## Usage

```sh
npm i named-ids
```

### Import

``` js
// ES6
import { getNamedId, getNameIdParts } from 'named-ids';

// Node
const { getNamedId, getNameIdParts } = require('named-ids');
```

### Generate random names


```js
getNamedId();
// "fishy otters"

getNamedId();
// "twitchy pigs"

```

### Seeded randoms produce same result every time


```js
getNamedId("ABC");
// "rowdy rhinos"
getNamedId("ABC");
// "rowdy rhinos"

getNamedId("XYZ");
// "fat turtles"
getNamedId("XYZ");
// "fat turtles"
```


