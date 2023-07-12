import Title from "./Title";
import Input from "./Input";
import List from "./List";

import { useEffect, useState } from "react";




function Home() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Programa porfavor",
      completed: false,
    },
    {
      id: 2,
      title: "Estudia Ux ",
      completed: false,
    },
    {
      id: 3,
      title: "Come sano",
      completed: false,
    },
    {
      id: 4,
      title: "Haz ejercicio",
      completed: false,
    },
    {
      id: 5,
      title: "Cuidate",
      completed: false,
    }
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filterTodos, setFilterTodos] = useState('todos')

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodo(todoList);
  }

  const handleSetCompleted = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodo(updatedList)
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodo(updatedList);
  }

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setActiveFilter(updatedList);
  }

  const showallTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilterTodos(todos)
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.cpmpleted === false)
      setFilterTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilterTodos(completedTodos)
    }
  }, [activeFilter, todos])
  return (

    <div className="bg-gray-800 min-h-screen h-full text-yellow-400 flex items-center justify-center py-20 px-5">
      <div className="continer flex flex-col max-w-xl">
        <Title/>
        <Input addTodo={addTodo} />
        <List
          todos={todos}
          activeFilter={activeFilter}
          handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete}
          showallTodos={showallTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />

      </div>

    </div>
  );
}

export default Home;
