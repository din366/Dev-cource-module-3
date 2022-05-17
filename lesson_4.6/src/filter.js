const filter = (arr, key, val) => {
  return arr.filter((item) => {
    return item[key] === val ? true : false;
  })
};

export default filter;