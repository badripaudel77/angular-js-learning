console.log(">>> Angular JS App has loaded.")

function myController($scope) {
    $scope.fullname = "Badri Paudel";

    $scope.items = ['First Item', 'Second Item', 'Third Item'];
    $scope.title = '';

    $scope.submitForm = function() {
        alert("submitForm");
    }
}

// factory function that returns ddo
 function ListItem() {
    let ddo = {
        restrict: 'AE',
        templateUrl : 'myDirective.html',   
    };
    return ddo;
}