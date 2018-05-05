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