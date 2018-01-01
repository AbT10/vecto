/* find the shape of array  */
module.exports = function calcShape(arr) {
    const shape = [];
    shape.push(arr.length);
    let elem = arr[0];
    while (Array.isArray(elem)) {
        shape.push(elem.length);
        elem = elem[0];
    }
    return shape;
}