# Example of Travis CI + Nightwatch

* [travis-ci.org](https://travis-ci.org/)
* [nightwatchjs.org](http://nightwatchjs.org/)

![Build Status](https://travis-ci.org/ovirovkin/nightwatch-test.svg)

### Prerequisites
* Install Node.js
* Install Java/JDK 

### Clone the repository

```sh
git clone https://github.com/ovirovkin/nightwatch-test.git nightwatch-test
cd nightwatch-test
```

### Install required dependencies

```sh
npm install
```

### Run tests

```sh
npm test
```

An output of tests execution is xml file and screenshots (if applicable). Results could be found in `test-results` folder per specified version of the repo, example: `test-results/0.0.1/`
