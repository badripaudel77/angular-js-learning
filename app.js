console.log(">>> Angular JS App has loaded.");
let app = angular.module('myApp', ['pascalprecht.translate']);

app.config(function($translateProvider) {
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

  app.controller('translateController', function($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  });