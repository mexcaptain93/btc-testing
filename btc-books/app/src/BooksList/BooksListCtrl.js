BooksApp.controller('BooksListCtrl', function ($scope, $rootScope, BooksService) {

    BooksService.getBooks().then((booksData) => {
        if (!$rootScope.books) {
            $rootScope.books = booksData.data;
        }
    });


    $scope.$watch('search', (s) => {
        $scope.dynamicFilter = s;
    });

    // Filtering
    $scope.$watch('filter', (f) => {
        $scope.dynamicOrder = "";
        $scope.dynamicFilter = {};
        switch (f) {
            case 'all':
                break;

            case 'recent':
                $scope.dynamicOrder = "id";
                break;

            case 'free':
                $scope.dynamicFilter = {
                    'price': 0
                };
                break;

            case 'popular':
                $scope.dynamicOrder = "price";
                break;


            default:
                $scope.dynamicFilter = {};
                break;
        }

    });



});
