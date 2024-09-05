const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {'text': 'Fare la spesa', 'done': false},
                {'text': 'Pulire casa', 'done': false},
                {'text': 'Fare jogging', 'done': true},
                {'text': 'Studiare', 'done': false},
                {'text': 'Pulire auto', 'done': false},
                {'text': 'Andare a correre', 'done': true}
            ]
        }
    },
    methods: {
        deleteTodoItem(todoItemIndex) {
            this.todoList.splice(todoItemIndex, 1);
        }
    }

}).mount('#app')
