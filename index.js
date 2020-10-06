// import data
const cities = require("./data/cities.json");
const regions = require("./data/regions.json");

// counting
const citisCount = cities.length;
const regionsCount = regions.length;

// export
module.exports = {
  cities,
  regions,
  citisCount,
  regionsCount,
};
