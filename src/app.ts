import { createClassesNavigation } from "./mapping";
import { mockSchoolsWithClasses } from "./mock";

const output = (el: any) => JSON.stringify(el, null, 2);

console.log("Create classes navigation", output(mockSchoolsWithClasses));
console.log("Result", output(createClassesNavigation(mockSchoolsWithClasses)));

const array = [1, 2, 3, 4, 5];

const f1 = () => {
    for (var el of array) {
        if (el === 3) {
            return el;
        }
    }
};

const foundV1 = array.find((el) => el === 3);
const foundV2 = f1();

console.log("===============================");
console.log("FIND", { foundV1, foundV2 });

const f2 = () => {
    let filtered = [];
    for (var el of array) {
        if (el % 2 === 0) {
            filtered.push(el);
        }
    }
    return filtered;
};

const filteredV1 = array.filter((el) => el % 2 === 0);
const filteredV2 = f2();

console.log("===============================");
console.log("FILTER", { filteredV1, filteredV2 });

const f3 = () => {
    let mapped = [];
    for (var el of array) {
        mapped.push(el * 3);
    }
    return mapped;
};

const mappedV1 = array.map((el) => el * 3);
const mappedV2 = f3();

console.log("===============================");
console.log("MAP", { mappedV1, mappedV2 });

const f4 = () => {
    let flatMapped = [];
    for (var el of array) {
        if (el % 2 === 0) {
            flatMapped.push(el * 3);
        }
    }
    return flatMapped;
};

const flatMappedV1 = array.flatMap((el) => (el % 2 === 0 ? el * 3 : []));
const flatMappedV2 = f4();

console.log("===============================");
console.log("FLATMAP", { flatMappedV1, flatMappedV2 });

const f5 = () => {
    let sum = 0;
    for (var el of array) {
        sum += el;
    }
    return sum;
};

const reducedV1 = array.reduce((el, sum) => (sum += el), 0);
const reducedV2 = f5();

console.log("===============================");
console.log("REDUCE", { reducedV1, reducedV2 });
