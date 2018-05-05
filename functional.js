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