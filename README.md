# The test

The test is split into five tasks, that need to be solved one by one.

Please try to not skip any of it. Do not start the fourth and the fifth task without finishing at least one of the previous.

The overall purpose of this test is to rate:

- problem-solving approach
- knowledge of cypress
- knowledge javascript basics
- knowledge mocha nad chai libraries

You will work on the one spec including three scenarios (tests).
Your task is to do it in a way that all the tests will pass!

# Preparation

- Node.js installed
- Yarn installed
- repository cloned

# Tasks

## Task 1: Write the test covering the scenario: Login page - should show an error when trying to login with invalid credentials

- visit the https://instapage.com domain
- click on the "BOOK A DEMO" button
- fill the "Email" and "Password"
- click on the "LOG IN" button
- assert the error message

## Task 2: Write the test covering the scenario: Demo page - should load footer with all elements and navigate to the privacy policy

- visit the https://instapage.com domain
- click on the "GET STARTED" button
- scroll to the bottom of the page
- assert the footer elements
- click on the "Privacy policy"
- assert the URL

## Task 3: Write the test covering the scenario: Resources - should return eight search results

- visit the https://instapage.com domain
- click on the "Browse Library" button
- assert the URL
- type "Conversion ROAS" in the search bar
- assert that there are 8 results returned

## Task 4: Move all reusable steps to the beforeEach

## Task 5: Define baseUrl and use it in tests
