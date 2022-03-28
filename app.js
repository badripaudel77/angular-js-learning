console.log(">>> Angular JS App has loaded.");
let app = angular.module('myApp', ['pascalprecht.translate']);
console.log("App = ", app);

// METHOD 1
/*
 ** Configure the app to use the $translateProvider service
 ** by providing the language code, it will use the corresponding translation file.
 ** giving translation table directly inside of the config [suitable for very small apps or demo apps]
*/
/*
app.config(function($translateProvider) {
console.log("Config file loaded.");
    $translateProvider.translations('en', {
      HEADLINE: 'Hello there, This is my awesome app!',
      INTRO_TEXT: 'And it has i18n support!'
    })
    .translations('de', {
      HEADLINE: 'Hey, das ist meine großartige App!',
      INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
    });
    $translateProvider.preferredLanguage('en');
  });
  
  */

 // METHOD 2 
/*
 ** Loads the translation text as JSON [response must be in JSON format key and value]
 ** and that response will be automatically loaded into the translation service, as simple as that.
*/

/*
 angular.module('myApp').config(['$translateProvider', function($translateProvider) {
  console.log("loading config");
  $translateProvider.useUrlLoader('https://jsonplaceholder.typicode.com/todos/1?lang=en_US');
  $translateProvider.preferredLanguage('sv_SV');
}]);
*/

// METHOD 3
/*
 ** translation using static json file and changing at runtime
 ** folder will have json file with key like key: {key: value, ....}
 ** de -> for german
 ** en -> for english
*/
angular.module('myApp').config(['$translateProvider', function($translateProvider) {
  console.log("Translate using  static json file and changing at runtime from /localles/locale-code.json");
  $translateProvider.useStaticFilesLoader({
    prefix: 'locales/locale-',
    suffix: '.json'
  })
    // remove the warning from console log by putting the sanitize strategy
    .useSanitizeValueStrategy('sanitizeParameters')    
    .preferredLanguage(1>2?'de':'en');
}]);


// Controller
app.controller('translateController', function($translate, $scope) {
    console.log("translatorController loaded.");
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  }); 

  