import React, { useState } from 'react';
import { MainPage } from './pages/MainPage';
import { DepartmentPage } from './pages/DepartmentPage';
import { Header } from './components/Header';

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