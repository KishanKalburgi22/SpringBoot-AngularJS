angular.module('demoModule').service('userService', [ '$http', function($http) {
	var service = {
		getAllUsers: function() {
			return $http.get('/users');
		},
		updateUser: function(user) {
			return $http.put('/users',user);
		},
		deleteUser: function(id) {
			return $http.delete('/users/'+id);
		},
		addUser: function(user){
			return $http.post('/users',JSON.stringify(user));
		}
	}

	return service;
} ]);
