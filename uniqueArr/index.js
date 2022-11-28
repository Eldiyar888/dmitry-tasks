const uniqueArray = (arr) => {
  let arrThis = []
    arr.reduce((acc, next) => {
        if (!acc.includes(next.Value.toUpperCase())) {
          acc.push(next.Value.toUpperCase());
          arrThis.push(next);
        }
        return acc;
    }, [])
    return arrThis;
  }

module.exports = uniqueArray;
