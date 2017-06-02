(function() {
	function HomeCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		this.doSomething = function() {
			$uibModal.open(
				{
				template: "my template"
			}

			)
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl',['Room', '$uibModal', HomeCtrl]);
})();