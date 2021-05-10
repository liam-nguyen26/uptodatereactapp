import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {
    const list = props.list;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHanlder = selectedYear => {
      setFilteredYear(selectedYear);
    };
    
    const filteredYearExpenses = list.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHanlder}/>
          <ExpensesChart expenses={filteredYearExpenses} />
          <ExpensesList items={filteredYearExpenses}/>
        </Card>
      </div>

    );
}

export default Expenses;
