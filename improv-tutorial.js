// Require libraries

const Improv = require('improv');
const yaml = require('js-yaml');
const fs = require('fs-jetpack');

// Load our data from a file
const grammarData = yaml.load(fs.read('grammar.yaml'));

// Create a generator object from this data
const generator = new Improv(grammarData, {
    filters: [Improv.filters.mismatchFilter()],
    reincorporate: true
});

// Generate text and print it out
for ( var i = 0; i < 5; i++) {
    console.log(generator.gen('root', {}));
}