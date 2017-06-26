(function() {
	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		Room.all = rooms;

		var room = {};
		Room.add = function(room) {
			// Use the firebase method $add here
			rooms.$add({ room: "new room4" }).then(function(ref) {
			  var id = ref.key;
			  console.log("added record with id " + id);
			  rooms.$indexFor(id); // returns location in the array
			});
		}

		return Room;
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();