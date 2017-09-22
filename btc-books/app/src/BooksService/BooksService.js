angular
    .module('BooksApp')
    .factory('BooksService', function ($http) {

            return {

                getBooks: () => {
                    return $http.get('data/books.json');
                },

                addBook: (list, book) => {
                    list.push(book);
                }

            }

        }
    );
