(function() {
	function BootstrapCtrl($uibModal) {
		debugger;
		console.log("hello")
	}
	angular
		.module('blocChat')
		.controller('BootstrapCtrl', [ '$uibModal', BootstrapCtrl]);
})();