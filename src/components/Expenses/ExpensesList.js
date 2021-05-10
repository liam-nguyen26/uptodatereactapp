import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return (
        <ul className='expenses-list'>
        {
            props.items.map((expense) => (
                <ExpenseItem 
                key={expense.id}
                expenseTitle={expense.title} 
                expenseDate={expense.date} 
                expenseAmount={expense.amount}
                />
            ))
        } 
        </ul>
    ) 
}

export default ExpensesList;