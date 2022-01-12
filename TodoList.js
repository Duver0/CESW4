import TodoItem from "./TodoItem";


const TodoList = ({ todos, setTodos, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    alert("Se ha eliminado correctamente");
  };

  const completed = (todo) => {
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
       
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          completed={completed}
          setEdit={setEdit}          
        />
      ))}
    </div>
  );
};

export default TodoList;
