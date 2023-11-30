console.log("Loaded VI");

export default {
  hello: "Xin chào",
  welcome: "Xin chào {name}!",
  about: {
    you: "Xin chào {name}! Bạn {age} tuổi",
  },
  "scope.test": "Un scope",
  "scope.more.test": "Un scope",
  "scope.more.param": "Un scope avec un {param}",
  "scope.more.and.more.test": "Un scope",
  "scope.more.stars#one": "1 étoile sur GitHub",
  "scope.more.stars#other": "{count} étoiles sur GitHub",
  "cows#one": "Une vache",
  "cows#other": "{count} vaches",
} as const;
