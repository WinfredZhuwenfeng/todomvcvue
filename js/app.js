(function (window, Vue) {
	'use strict';

	// Your starting point. Enjoy the ride!
const app = new Vue({
  el: '#app',
  data: {
    todos: [
    {id: 1, title: 'eating', completed: true},
    {id: 2, title: 'sleeping', completed: false},
    {id: 3, title: 'coding', completed: true},
    ]
  }
})
})(window, Vue);
