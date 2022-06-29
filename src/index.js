// import dependencies
const { uniqBy } = require("lodash");
const { v4: uuid } = require("uuid");

// import cities & regions from the json
let citiesList = require("./json/ville.json");
let regionsList = require("./json/region.json");

// import some helpers
const { writeJson } = require("./helpers");

// update citiesList props
new Promise((resolve) => {
  citiesList.map((c) => {
    // convert id to number
    c.id = parseInt(c.id);

    // convert region id to number
    c.region = parseInt(c.region);

    // rename prop
    c.region_number = c.region;

    // rename & delete old prop
    c.name = c.ville;
    delete c.ville;

    // rename & delete old prop
    c.region_name = regionsList.filter((reg) => reg.id == c.region)[0].region;
    delete c.region;
  });

  // make cities uniq
  citiesList = uniqBy(citiesList, "name");

  // re-define city id & add uniqID
  citiesList.forEach((c, i) => {
    c.id = i + 1;
    c.uniq_id = "city_" + uuid();
  });

  // resolve
  resolve(citiesList);
})
  .then((data) => {
    writeJson("cities", data);
  })
  .catch((err) => {
    console.log(err);
  });

// update regionsList props
new Promise((resolve) => {
  regionsList.map((r) => {
    // convert id to number
    r.id = parseInt(r.id);

    // cities count
    r.cities_count = citiesList.filter((city) => {
      return city.region_number === r.id;
    }).length;

    // cities list
    r.cities_list = [];
    citiesList.forEach((city) => {
      if (city.region_number === r.id) {
        r.cities_list.push(city.name.replace("‎", ""));
      }
    });

    // rename & delete old prop
    r.name = r.region;
    delete r.region;
  });
  resolve(regionsList);
})
  .then((data) => {
    writeJson("regions", data);
  })
  .catch((err) => {
    console.log(err);
  });
