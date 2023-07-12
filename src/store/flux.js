

const getState = ({ setStore, getActions, getStore }) => {

    return {

        store: {
            task:
            {
                id: "",
                title: "",
                completed: ""
            }
        },

        actions: {
            handleSetCompleted: (id) => {
                const updatedList = todos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo
                })
                setTodo(updatedList)
            }


        }



    }


}


