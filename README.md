# Example of Travis CI / CircleCI + Nightwatch

* [Travis CI](https://travis-ci.org/)
* [CircleCI](https://circleci.com/)
* [Nightwatch.js](http://nightwatchjs.org/)

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

### Gitflow Workflow

Please use [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow to create and manage branches for features, releases, etc. [Gitflow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)

```sh
git flow feature start feature_branch
git flow feature finish feature_branch
```
Once your branch is ready, please create pull request to `develop` and assign at least one reviewer to review your change. You are all set to complete your pull request, when you have at least one approval and build is passing.

### Continuous Integration

This repo uses two continuous integration services as an example, please find builds here:
[Travis CI](https://travis-ci.org/ovirovkin/nightwatch-test/builds)
[CircleCI](https://circleci.com/gh/ovirovkin/nightwatch-test)

It's going to trigger build and run tests for every single change on your branch automatically. 