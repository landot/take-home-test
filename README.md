
## Prerequisites

Make sure you have the following installed:
- nvm (you can check if it is installed by running `nvm --version`)

## Installation

Clone the repository to your local machine:
```bash
git clone https://github.com/landot/__________
```
Move to the repo's directory:
```bash
cd ________
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

## Folder structure: