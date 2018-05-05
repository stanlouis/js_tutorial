let states = ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota'];

// Returns a URL-friendly version of a string Example: 'North Dakota' ->
// 'north-dakota'
function urlify(string) {
    return string
        .toLowerCase()
        .split(/\s+/)
        .join('-');
}

// map: imperativeMap(state)
function imperativeMap(states) {
    let urlStates = [];
    states.forEach(state => urlStates.push(urlify(state)));
    return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
    return states.map(state => urlify(state));
}

console.log(functionalMap(states));

// Return URL version of a string Example: 'North Dakota' ->
// 'https://example.com/north-dakota'
function urlMap(states) {
    return states.map(state => `https://example.com/${urlify(state)}`);
}

console.log(urlMap(states));

// filter: Imperative version
function imperativeFilter(states) {
    let singleWordStates = [];
    states.forEach(state => {
        if (state.split(/\s+/).length === 1) {
            singleWordStates.push(state);
        }
    });
    return singleWordStates;
}

console.log(imperativeFilter(states));

// filter: Functional version
function functionalFilter(states) {
    return states.filter(state => state.split(/\s+/).length === 1);
}

console.log(functionalFilter(states));

let dakotaStates = states.filter(state => state.includes('Dakota'));

let dakotaStates2 = states.filter(state => state.split(/\s+/).length > 1);

console.log(dakotaStates);
console.log(dakotaStates2)

let a = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

// reduce: Iterative solution
function iterativeSum(array) {
    let total = 0;
    array.forEach(num => total += num);
    return total;
}

console.log(iterativeSum(a));

// reduce: Functional solution
function functionalSum(array) {
    return array.reduce((total, n) => total += n);
}

console.log(functionalSum(a));

// reduce object: Imperative solution
function imperativeLengths(states) {
    let lengths = {};
    states.forEach(state => {
        lengths[state] = state.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// reduce object: functional solution
function functionalLengths(states) {
    return states.reduce((lengths, state) => {
        lengths[state] = state.length;
        return lengths;
    }, {});
}

console.log(functionalLengths(states));