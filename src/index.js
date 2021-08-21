
exports.min = function min (array) {
    if(typeof array != "undefined" && array != null && array.length > 0) {

        let num = array[0]
        for (let i = 0; i < array.length; i++)
            if (num > array[i])
                num = array[i]
        return num
    }
        return 0

}

exports.max = function max (array) {
    if(typeof array != "undefined" && array != null && array.length > 0) {
        let num = array[0]
        for (let i = 0; i < array.length; i++)
            if (num < array[i])
                num = array[i]
        return num
    }
    return 0
}

exports.avg = function avg (array) {
    if (typeof array != "undefined" && array != null && array.length > 0) {
        let num = 0
        for (let i = 0; i < array.length; i++)
            num = num + array[i]
        return num / array.length;
    }
    return 0
}



