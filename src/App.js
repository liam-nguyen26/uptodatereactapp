import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 5, 5) },
  { id: 'e2', title: 'Battery', amount: 159.59, date: new Date(2021, 5, 11) },
  { id: 'e3', title: 'Car Insurance', amount: 886.88, date: new Date(2021, 5, 12) },
  { id: 'e4', title: 'Ip', amount: 590, date: new Date(2021, 8, 24) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHanlder = (expense) => {
    setExpenses(prevExpenses => {
      return  [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHanlder}/> 
      <Expenses list={expenses}/>
    </div>
  );
}

export default App;
