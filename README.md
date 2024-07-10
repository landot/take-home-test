## Summary

This repo contains Playwright tests in Typescript 

## Prerequisites

Make sure you have the following installed:
- nvm (you can check if it is installed by running `nvm --version`)

## Installation

Clone the repository to your local machine:
```bash
git clone https://github.com/landot/take-home-test
```
Move to the repo's directory:
```bash
cd take-home-test
```

Set Node version to lts/iron:
```bash
nvm install 
nvm use
```

Install node modules:
```bash
npm install
```


## To run tests:

*NOTE* by default the tests will run headlessly. If you want to watch the tests run on your machine, add `-- --headed` to the end of the command
example: `npm run test:e2e -- --headed`

- "npm run test": Use this to run all playwright tests
- "npm run test:components": Use this to run playwright component tests. These tests are shorter tests that validate functionality of smaller subsets of components in the UI
- "npm run test:e2e": Use this to run the test that uses the algorithm to find the fake gold bar
- "npm run report": Use this to load a test report web page for the most recent test results

## The Solution:
The solution is to break the gold bars into 3 groups of 3. For this description we will call them groups A, B, and C.

First you put group A on the left bowl of the scale and group B on the right bowl of the scale. You compare their weights. 
- If A is heavier than B, then it means that B has the fake bar
- If A is lighter than B, then it means that A has the fake bar
- If A and B are equal in weight, then it means that C has the fake bar

Using this first check, we now know which group of 3 bars has the fake bar.
The next steps will be with the group with the fake bar.

Next you put the first bar of the group on the left bowl and the second bar of the group on the right bowl.
- If the first bar is heavier than the second bar, then it means that second bar is fake
- If the first bar is lighter than the second bar, then it means that first bar is fake
- If the first bar and the second bar are equal in weight, then it means that the third bar is the fake bar


## Organizing Tests:
There are 2 sets of tests in this project.

1. `src/tests/actions` contains component-level tests for functionality like picking a coin, resetting the scale, and weighing different sets of bars
2. `src/tests/e2e.spec.ts` contains a single end-to-end test that uses an algorithm to find the fake bar by comparing different sets of bars

## Folder structure:
The project is organized in the following manner:
```
src
    pageObjects
        components (page objects for smaller components on the page like bowls, coins, etc)
        pages (the page object for the challenge page that uses the component page objects)
    tests
        actions (component-level tests)
        e2e.spec.ts (the e2e test that uses the algorithm to find the fake bar)
    types (misc types used in the tests)
    utils (misc utils used in the tests)
```

## Fun extras:
This project has pre-commit hooks set up so that it checks that:
- there are no linting errors
- there are no failing tests
- the commit message matches the [conventional commits reccomendations](https://www.conventionalcommits.org/en/v1.0.0/) 

There are more browsers and device emulators that can be configured to run in the `playwright.config.ts` file. I wanted to keep it simple with chromium desktop for now but there is always space to expand