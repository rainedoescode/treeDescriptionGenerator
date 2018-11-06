// Require libraries

const Improv = require('improv');
const yaml = require('js-yaml');
const fs = require('fs-jetpack');

// Load data from a file
const grammarData = yaml.load(fs.read('grammar.yaml'));

// Create a generator object from this data
/*const generator = new Improv(grammarData, {
    filters: [Improv.filters.mismatchFilter(),
    Improv.filters.partialBonus(),
    Improv.filters.unmentioned(1),
    Improv.filters.dryness()],
    reincorporate: true
});*/

// Generate text and print it out
for ( var i = 0; i < 5; i++) {
    const generator = new Improv(grammarData, {
        filters: [Improv.filters.mismatchFilter(),
            Improv.filters.partialBonus(),
            Improv.filters.unmentioned(1),
            Improv.filters.dryness()],
        reincorporate: true
    });
    console.log(generator.gen('root', {}));
    console.log("------------")
}