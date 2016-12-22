angular.
module('app').
config(['$locationProvider', '$routeProvider',
function config($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.
	when ('/books', {
		templateUrl: 'app/layout/book-list.html',
		controller:'booksListCtrl',
		resolve: {
			books: function(bookFactory) {
				return bookFactory.getBooks();
			}
		}
	}).
	otherwise({redirectTo: '/books'});
}
]);
