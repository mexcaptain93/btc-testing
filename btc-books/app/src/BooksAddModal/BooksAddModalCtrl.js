BooksApp.controller('BooksAddModalCtrl', function ($scope, $rootScope, BooksService) {

    // Modal tabs

    $scope.tab = 1;

    $scope.isActiveTab = (activeTab) => {
        return $scope.tab === activeTab;
    };

    $scope.setActiveTab = (tabNum) => {
        $scope.tab = tabNum;
    };

    $scope.sendForm = () => {
        let newBook = {
            "id": 123,
            "name": $scope.addBookForm.title,
            "author": $scope.addBookForm.author,
            "image": "book-1.jpg",
            "rating": 0,
            "price": 0,
            "views": 0
        };


        BooksService.addBook($rootScope.books, newBook);

    }

});
