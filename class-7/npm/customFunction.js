const fs = require("fs");

const readFile = () => {
  const filePath = "data.json";
  const data = fs.readFileSync(filePath);
  const parseData = JSON.parse(data);
  return parseData;
};

const writeFile = () => {
  const filepath = "data.json";
  const data = {
    id: 3,
    name: "Shaktiman",
    age: 70,
  };
  const newData = JSON.stringify(data);
  fs.writeFileSync(filepath, data); // overwrite
};
module.exports = { readFile, writeFile };
