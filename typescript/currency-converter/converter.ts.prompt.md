---
declare:
  - formatter.ts
---

Generate a file which exports a function (named currencyConvert) that converts currencies.

Here are the arguments:
- The first parameter is the from currency
- The second parameter is the to currency

How it should work:
- Choose a free service to find the exchange rate between the two currencies
- Do the conversion with the API and pass the value to format() to retrieve the formatted result
- Return the result

codespin:include:code-conventions.md