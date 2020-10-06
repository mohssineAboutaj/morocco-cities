<h1>Morocco Cities</h1>

## Table Of Content

- [Table Of Content](#table-of-content)
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [For Cities](#for-cities)
  - [For regions](#for-regions)
  - [For cities count & regions count](#for-cities-count--regions-count)
- [Changelog](#changelog)
- [Thanks for](#thanks-for)
- [License](#license)

## About

A list of all cities in morocco with it region

## Installation

```sh
yarn add morocco-cities
```

## Usage

### For Cities

```js
const { cities } = require("morocco-cities");
```

it's will return an array of objects like this

```json
[
  {
    id: 1,
    region_number: 6,
    name: "Aïn Harrouda",
    region_name: "Casablanca-Settat",
  },
];
```

### For regions

```js
const { regions } = require("morocco-cities");
```

it's will return an array of objects like this

```json
[
  {
    id: 12,
    cities_count: 2,
    cities_list: ["Awsard", "Oued-Eddahab"],
    name: "Dakhla-Oued Ed Dahab",
  },
];
```

### For cities count & regions count

```js
const { citisCount, regionsCount } = require("morocco-cities");
```

## Changelog

[Read From Here](./CHANGELOG)

## Thanks for

I want to say Thanks for **Alaouy** because i'm using [his repo data](https://github.com/alaouy/sql-moroccan-cities)

## License

[MIT](./LICENSE)
