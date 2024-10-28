// Require libraries

const Improv = require('improv');
// const yaml = require('js-yaml');
const fs = require('fs-jetpack');
const jetpack = require('fs-jetpack');

// Load data from a file
// const grammarData = yaml.load(fs.read('grammar.yaml'));

function loadSpec () {
    const spec = {};
    const snippetFiles = jetpack.find(`${__dirname}/grammar_data`, {
        matching: '*.json'
    });

    snippetFiles.forEach(function (filename) {
        const snippet = jetpack.read(filename, 'json');
        if (typeof snippet.groups === 'undefined') {
            snippet.groups = [];
        }
        if(snippet.phrases) {
            snippet.groups.push({
                tags: [],
                phrases: snippet.phrases
            });
        }
        spec[snippet.name] = snippet;
    });

    return spec;
}

// Create a generator object from this data
/*const generator = new Improv(grammarData, {
    filters: [Improv.filters.mismatchFilter(),
    Improv.filters.partialBonus(),
    Improv.filters.unmentioned(1),
    Improv.filters.dryness()],
    reincorporate: true
});*/

// Generate text and print it out, five examples
for ( var i = 0; i < 5; i++) {

    console.log("------------")
    const generator = new Improv(loadSpec(), {
        filters: [
            Improv.filters.mismatchFilter(),
            Improv.filters.partialBonus(),
            Improv.filters.unmentioned(1),
            Improv.filters.dryness()
        ]
    });
    console.log(generator.gen('root', {}));
    console.log("------------")
}