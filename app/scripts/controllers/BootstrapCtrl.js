(function() {
	function BootstrapCtrl($uibModalInstance) {
		this.exit = function(){
			$uibModalInstance.close();
		}
	}
	angular
		.module('blocChat')
		.controller('BootstrapCtrl', [ '$uibModalInstance', BootstrapCtrl]);
})();