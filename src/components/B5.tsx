import React, { useState, useCallback } from 'react';

interface Todo {
  id: number;
  task: string;
}

export default function B5() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTodo = useCallback(() => {
    if (newTask.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), task: newTask.trim() },
      ]);
      setNewTask('');
    }
  }, [newTask]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập công việc mới..."
        />
        <button onClick={handleAddTodo}>Thêm</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}