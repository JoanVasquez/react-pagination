export const fetchTodo = async ()  => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todo = response.json();
        return todo;
    }catch(ex) {
        throw ex;
    }
}
