import { useState } from "react";
import type { TodoType } from "./types";
import { v4 as uuidv4 } from "uuid";
import './todoList.scss'

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");

  const handleOnChange = (e, id?: string) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              [e.target.name]:
                e.target.name === "completed"
                  ? !todo.completed
                  : e.target.value,
            }
          : todo,
      ),
    );
  };

  const handleAddTodo = () => {
    if(!input.trim()) return
    setTodoList((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        text: input.trim(),
        completed: false,
      },
    ]);
    setInput("")
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };


  const handleDelete = (idx: number) => {
    const newArr = [...todoList];
    newArr.splice(idx, 1);
    console.log(newArr)
    setTodoList(newArr);
  };

  console.log(todoList)

  return (
    <div className="text-black p-20 flex flex-col gap-5">
      <h2>TodoList</h2>
      <div className="flex flex-col gap-2 w-100">
        <input
          className="border border-black-300 p-1 rounded"
          name="text"
          onChange={handleInput}
          type="text"
          value={input}
          autoComplete="false"
          placeholder="Enter todo"

        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-1 rounded-xl"
          aria-label="add-todo"
        >
          + Add
        </button>
      </div>

<div>
      {todoList.map((todo, idx) => {
        return (
          <div className="flex gap-2" key={idx}>
            <input
              name="completed"
              onChange={(e) => handleOnChange(e, todo.id)}
              type="checkbox"
              checked={todo.completed}
            />
            <div className={todo.completed ? 'strikeThrough' : ''}>{todo.text} </div>
            <button onClick={() => handleDelete(idx)}>🗑️</button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default TodoList;
