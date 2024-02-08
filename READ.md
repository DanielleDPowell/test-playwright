Installation of Playwright

npm init playwright@latest


Running Tests
Testing is defaulted to headless - meaning that the program will run without opening the server or the front-end 

npx playwright test

To run in ui mode

npx playwright test --ui

To run in headed mode

npx playwright test --headed

the webkit test will continuously fail unless you have safari.

(Also microsoft edge - it's considered a branded browser)


To see report of tests

npx playwright show-report


Trace Viewer

- allows you to see the past attempts of your tests.

It is currently set to 2 retries on CI pipeline and 1 locally.

reporting of testing

- dot (default for CI Pipeline but no documentation of anything ...... it is just dots)

- json file (too long)

- list ( might be too log in console log when doing a lot of tests)

- html - might be perfect for local and tracing of errors. Opens automically if some tests are failed.

- line tells you how many tests passed but not whcih ones ( Failures are reported inline)

- 


