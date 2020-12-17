angular
		.module('demoModule')
		.controller(
				'UserController',
				function($scope, userService) {
					$scope.message = "SpringBoot + AngularJs based application to manage the user details.";

					$scope.getUsers = function() {
						userService.getAllUsers().then(function(response) {
							$scope.users = response.data;
						});
					}

					$scope.update = function(user) {
						var val = document.getElementsByClassName("id_"
								+ user.id);
						user.name = val[0].value;
						user.description = val[1].value

						userService.updateUser(user);
						location.reload();
					}
					
					$scope.delete = function(id) {
						userService.deleteUser(id);
						location.reload();
					}
					
					$scope.addUser = function() {
						var user = {
						id: document.getElementById("id").value,
						name: document.getElementById("name").value,
						description: document.getElementById("description").value
						};
						userService.addUser(user);
						location.reload();
					}

				});
