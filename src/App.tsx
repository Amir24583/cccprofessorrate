import React, { useState, useEffect } from 'react';
import { MainPage } from './pages/MainPage';
import { DepartmentPage } from './pages/DepartmentPage';
import { Header } from './components/Header';
import { supabase } from './utils/supabase';

export function Page() { // Changed to named export
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos, error } = await supabase.from('todos').select();
        if (error) {
          console.error('Error fetching todos:', error);
        } else if (todos && todos.length > 0) {
          setTodos(todos);
        }
      } catch (err) {
        console.error('Error in getTodos:', err);
      }
    };

    getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name || JSON.stringify(todo)}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  return (
    <>
      <Header />
      {selectedDepartment ? (
        <DepartmentPage
          department={selectedDepartment}
          onBack={() => setSelectedDepartment(null)}
        />
      ) : (
        <MainPage onDepartmentSelect={setSelectedDepartment} />
      )}
    </>
  );
}

export default App;
