const { createApp } = Vue

createApp({
    data() {
        return {
            newTodoItem: '',
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
        // ** adding a new object to the array
        addNewTask(item) { 
            if (item.length >= 3) {
                this.todoList.push({'text': item, 'done': false});
                this.clearTodoInput();
            }
        },

        clearTodoInput() {
            this.newTodoItem = '';
        },

        deleteTodoItem(todoItemIndex) {
            this.todoList.splice(todoItemIndex, 1);
        },

        deleteItem(todoItemIndex) {
            this.todoList.splice(todoItemIndex, this.todoList.length);
        }
    }

}).mount('#app')
