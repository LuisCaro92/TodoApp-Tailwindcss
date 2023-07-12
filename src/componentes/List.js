import Filter from "./Filter";
import Todo from "./Todo";


const List = ({
    todos,
    handleSetCompleted,
    handleDelete,
    activeFilter,
    showallTodos,
    showActiveTodos,
    showCompletedTodos,
    handleClearComplete


}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleSetCompleted={handleSetCompleted}
                        handleDelete={handleDelete}
                    />
                )
            })}
            <Filter
                activeFilter={activeFilter}
                total={todos.length}
                showallTodos={showallTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}

            />
        </div>
    )
}

export default List;