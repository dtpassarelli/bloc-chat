(function() {
	function HomeCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		this.doSomething = function() {
			$uibModal.open(
			{
				controller: "BootstrapCtrl as modal",
				templateUrl: "/templates/modal.html"
			}

			)
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl',['Room', '$uibModal', HomeCtrl]);
})();