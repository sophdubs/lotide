# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sophdubs/lotide`

**Require it:**

`const _ = require('@sophdubs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Prints an assertment or failure statement based on if the input arrays are equal. *This method does not support nested arrays. 
* `assertEquals(value1, value2)`: Prints an assertment or failure statement based on if the input values are equal.
* `assertObjectsEqual(object1, object2)`: Prints an assertment or failure statement based on if the input objects are equal. *This method does not support arrays and/or objects as values. 


* `countLetters()`: 
* `countOnly()`: description
* `eqArrays()`: description
* `eqArraysRecursive()`: description
* `eqObjects()`: description
* `eqObjectsRecursive()`: description
* `findKey()`: description
* `findKeyByValue()`: description
* `flatten()`: description
* `head()`: description
* `letterPositions()`: description
* `map()`: description
* `middle()`: description
* `tail()`: description
* `takeUntil()`: description
* `without()`: description