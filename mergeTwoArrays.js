function mergeSortedArrays(array1, array2) {
    if (array1.length === 0) {
        return array2
    }
    if (array2.length === 0) {
        return array1
    }
    let mergedArray = []
    let array1index = 0
    let array2index = 0
    while (array1index < array1.length || array2index < array2.length) {
        if (array1[array1index] > array2[array2index]) {
        mergedArray.push(array2[array2index])
        array2index++
        } else {
        mergedArray.push(array1[array1index])
        array1index++
        }
    }
    return mergedArray
    }
    console.log(mergeSortedArrays([], [1]))
    console.log(mergeSortedArrays([2], []))
    console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))
