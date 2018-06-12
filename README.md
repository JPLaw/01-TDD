01: Node Ecosystem
===

## Submission Instructions
* Read this document entirely and estimate how long this assignment will take.
* Work in a fork of this repository
* **DISREGARD FOR 6/11** Hook up your forked repo to [Travis-CI](https://travis-ci.org/) using the steps demonstrated in class. 
* Work in a branch on your fork called `lab-<lab-number>`, e.g. this lab's branch would be named `lab-01`
* After completion, make a PR from your `lab-<lab-number>` branch to the master branch of your forked repository
* Submit on canvas a question and observation, your original estimate, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.

* **README.md** - contains your documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **lib/** - contains module definitions
* **__test__/** - contains unit tests

## Testing

### Greet Module Tests
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

### Arithmetic Module Tests
* Test each method for proper use (invoked with number arguments)
* Test each method for inproper use (invoked with one or more non-number arguments)

## Feature Tasks

### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

### Arithmetic Module
Create a NodeJS module in the `lib` directory named `arithmetic.js`. This module exports an object and should have `add` and `sub` methods that implement addition and subtraction.
* The `add` method should have a 2 parameters (arity of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the sum of the 2 numbers
* The `sub` method should have 2 parameters (arity of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the second parameter subtracted from the first parameter

### Documentation

Arithmetic.js:
Math.add- this operation only takes in two parameters, and it is declaring a function that uses an if statment to say if the parameters are not a number, the result will be null, otherwise it should run the function where it adds the two parameters together. 

Math.subtract- this operation only takes in two parameters, and it is declaring a function that uses an if statment to say if the parameters are not a number, the result will be null, otherwise it should run the function where it subtracts the first parameter from the second.

Greet.js:
his module should export a single function that has a single parameter that should expect a string as it's input. It will return the input name, concatenated with "hello" and will return null if the input is not a string.
