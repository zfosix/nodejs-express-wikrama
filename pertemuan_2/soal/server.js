const carsData = require('./data.js');

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carsData.filter(car => car.year <= 1994));
        }, 5000);
    });
}

(async () => {
    try {
        const filteredData = await getData();
        console.log(JSON.stringify(filteredData, null, 2));
    } catch (error) {
        console.error(error);
    }
})();
