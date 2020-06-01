const camelCase = (someString) => {
  let arr = someString.split(" ");
  return arr
    .map((item) => `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`)
    .join(" ");
};

module.exports = {
  camelCase,
};
