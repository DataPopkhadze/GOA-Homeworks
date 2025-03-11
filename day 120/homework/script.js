function isSubset(subset, set) {
    for (let item of subset) {
        if (!set.has(item)) {
            return false;
        }
    }
    return true;
}

function invertMap(map) {
    const invertedMap = new Map();

    map.forEach((value, key) => {
        invertedMap.set(value, key);
    });

    return invertedMap;
}

function findMaxKeys(map) {
    let maxVal = -Infinity;
    const maxKeys = [];

    map.forEach((value, key) => {
        if (value > maxVal) {
            maxVal = value;
            maxKeys.length = 0; 
            maxKeys.push(key);
        } else if (value === maxVal) {
            maxKeys.push(key);
        }
    });

    return maxKeys;
}
