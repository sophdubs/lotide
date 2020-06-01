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

* `countLetters(string)`: Returns an object that represents the number of occurences of each character found in the input string. The character is the key, and its number of occurences is the value. 
* `countOnly(array, object)`: This function will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays(array1, array2)`: Returns true if both input arrays are equal, false if otherwise. *Does not support nested arrays
* `eqArraysRecursive(array1, array2)`: Returns true if both input arrays are equal, false if otherwise. This function does support nested arrays.
* `eqObjects(object1, object2)`: Returns true if both input objects are equal, false if otherwise. *Does not support nested objects
* `eqObjectsRecursive(object1, object2)`: Returns true if both input objects are equal, false if otherwise. This function does support nested objects
* `findKey(object, callback)`: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object, value)`: This function takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(array)`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `head(array)`: Returns the first item in the input array. If the input array is empty, the function returns undefined
* `letterPositions(string)`: Returns an object of all the indices (zero-based positions) in the string where each character is found. The keys in the output object are the characters which map to an array containing the indices where the characted was found in the input string. 
* `map(array, callback)`: This function will return a new array containing the results of the callback applied to each value in the input array.
* `middle(array)`: This function will take in an array and return the middle-most element(s) of the given array.
* `tail(array)`: Returns everything but the first element of a given input array. 
* `takeUntil(array, callback)`: This function takes in an input array and a callback. It will return a "slice" of the array with elements taken from the beginning up until the callback returns a truthy value.
* `without(inputArray, unwantedValuesArray)`: This function will return a subset of a given array, removing unwanted elements.