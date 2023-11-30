console.log("Loaded EN");

export default {
  hello: "Hello",
  welcome: "Hello {name}!",
  about: {
    you: "Hello {name}! You are {age} yo",
  },
  "scope.test": "A scope",
  "scope.more.test": "A scope",
  "scope.more.param": "A scope with {param}",
  "scope.more.and.more.test": "A scope",
  "scope.more.stars#one": "1 star on GitHub",
  "scope.more.stars#other": "{count} stars on GitHub",
  "missing.translation.in.vi": "This should work",
  "cows#one": "A cow",
  "cows#other": "{count} cows",
} as const;
