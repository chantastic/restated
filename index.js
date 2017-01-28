'use strict';
module.exports = {
	increment: function (key) {
		return function (state) {
			var newObj = {};
			newObj[key] = state[key] + 1;
			return newObj;
		};
	},

	decrement: function (key) {
		return function (state) {
			var newObj = {};
			newObj[key] = state[key] - 1;
			return newObj;
		};
	},

	toggle: function (key) {
		return function (state) {
			var newObj = {};
			newObj[key] = !state[key];
			return newObj;
		};
	}
};
