(function (window, Vue) {
	'use strict';

	// Your starting point. Enjoy the ride!
const app = new Vue({
  el: '#app',
  data: {
    todotext:'',
    todos: [
    {id: 1, title: 'eating', completed: true},
    {id: 2, title: 'sleeping', completed: false},
    {id: 3, title: 'coding', completed: true},
    ]
  },
  methods:{
    addTodo () {
      let [ntt, todos, id = 1] = [this.todotext, this.todos]
      if(ntt.trim().length === 0) return
      todos.push({
        id: todos[todos.length - 1].id + 1,
        title: ntt,
        complete: false
      })
    this.todotext = ''
    }
  }
})
})(window, Vue);
