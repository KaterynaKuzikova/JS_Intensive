function selectFromInterval(arrNumb, numInt1, numInt2){
    const result = [];

        if (!Array.isArray(arrNumb)) {
            throw new Error(`${arrNumb} is not a array`);
        }

        for (let i = 0; i < arrNumb.length; i++) {
            if (!Number.isInteger(arrNumb[i])) {
                throw new Error(`${arrNumb[i]} is not a number`);
            }
        }

        if (!Number.isInteger(numInt1) || !Number.isInteger(numInt2)) {
            throw new Error(`arguments numInt1 and numInt2 must be a number.`);
        }

        let number;

        if (numInt1 > numInt2) {
            number = numInt1;
            numInt1 = numInt2;
            numInt2 = number;
        }

        for (let i = 0; i < arrNumb.length; i++) {
            if (arrNumb[i] >= numInt1 && arrNumb[i] <= numInt2) {
                result.push(arrNumb[i]);
            }
        }
    return result;
}

const res = selectFromInterval([1,3,5], 5,2);
console.log(res);