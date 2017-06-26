(function() {
	function BootstrapCtrl($uibModalInstance, Room) {
		this.exit = function(){
			$uibModalInstance.close();
		}
		this.newRoom = function(room) {
			Room.add(room);
		}
	}
	angular
		.module('blocChat')
		.controller('BootstrapCtrl', [ '$uibModalInstance','Room',  BootstrapCtrl]);
})();