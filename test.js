function findCombos(arr1, arr2, n, m, z) {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if ((Number(arr1[i]) + Number(arr2[j])).toFixed(2) == z)
                console.log(arr1[i] + " + " + arr2[j] + " = " + z);
}

function createArr(x, y, z) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 1; i <= x; i += 0.1) {
        arr1.push(i.toFixed(2));
    }
    for (let i = 1; i <= y; i += 0.1) {
        arr2.push(i.toFixed(2));
    }
    findCombos(arr1, arr2, arr1.length, arr2.length, z);
}

createArr(23.95, 13.35, 35);
// 21.7 + 13.3 = 35
// 21.8 + 13.2 = 35
// 21.9 + 13.1 = 35
// 22.0 + 13.0 = 35
// 22.1 + 12.9 = 35
// 22.2 + 12.8 = 35
// 22.3 + 12.7 = 35
// 22.4 + 12.6 = 35
// 22.5 + 12.5 = 35
// 22.6 + 12.4 = 35
// 22.7 + 12.3 = 35
// 22.8 + 12.2 = 35
// 22.9 + 12.1 = 35
// 23.0 + 12.0 = 35
// 23.1 + 11.9 = 35
// 23.2 + 11.8 = 35
// 23.3 + 11.7 = 35
// 23.4 + 11.6 = 35
// 23.5 + 11.5 = 35
// 23.6 + 11.4 = 35
// 23.7 + 11.3 = 35
// 23.8 + 11.2 = 35