const assertEqual = require('../assertEqual');

// identical vs non-identical strings
assertEqual('Sophie', 'Sophie');
assertEqual('Lighthouse Labs', 'Bootcamp');
// identical vs non-identical numbers
assertEqual(1, 1);
assertEqual(1, 2);