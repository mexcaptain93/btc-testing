var BooksApp = angular.module('BooksApp', ['ngRoute']);

angular.
module('BooksApp').
config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/books', {
            templateUrl: 'src/BooksList/BooksList.html',
            controller: 'BooksListCtrl'
        }).
        otherwise({
            redirectTo: '/books'
        });
    }
]);
