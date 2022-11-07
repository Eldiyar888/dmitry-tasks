const uniqueArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i].Value.toLowerCase() == arr[j].Value.toLowerCase()) {
                arr[j].Value = 'EMPTY';
            }
        }
    }
    let uniqArrValues = arr.filter((value) => {
        return value.Value !== 'EMPTY'
    })
    return uniqArrValues;
};

module.exports = uniqueArray;
