(function() {
	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		Room.all = rooms;

		var room = {};
		Room.add = function(room) {
			// Use the firebase method $add here
			$add({room: room});
		}

		return Room;
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();