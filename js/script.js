const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                'fare la spesa',
                'pulire casa',
                'fare jogging',
                'studiare',
                'pulire auto',
                'andare a correre'
            ]
        }
    }
}).mount('#app')