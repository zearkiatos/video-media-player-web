function* simpleGenerator() {
    console.log('Generator Start');
    yield 1
    console.log('Generator End');
}

function* idMakerGenerator() {
    let id = 1;
    while (true) {
        yield id;
        id = id + 1;
    }
}

function* idMakerWithResetGenerator() {
    let id = 1;
    let reset;
    while (true) {
        reset = yield id;
        if (reset) {
            id = 1;
        }
        else {
            id = id + 1;
        }

    }
}

function* fibonacciGenerator() {
    let first = 1;
    let second = 1;
    while (true) {
        const nextNumber = first + second;
        first = second;
        second = nextNumber;
        yield nextNumber;
    }
}

export default {
    simpleGenerator,
    idMakerGenerator,
    idMakerWithResetGenerator,
    fibonacciGenerator
}