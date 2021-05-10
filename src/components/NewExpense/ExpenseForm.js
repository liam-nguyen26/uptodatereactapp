import {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isShown, setIsShown] = useState(false);

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHanlder = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...userInput,
        //         enteredTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }
    
    const submitHanlder = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredDate('');
        setEnteredAmount('');
        setEnteredTitle('');
    };

    const buttonCheckHandler = () => {
        if (!isShown) setIsShown(true);
        else setIsShown(false);
    };

    if (!isShown) {
        return (
            <button onClick={buttonCheckHandler} className='new-expense__controls'>Click to expand</button>
        )
    }

    if (isShown) {
        return (
            <form onSubmit={submitHanlder}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHanlder}/>
                    </div>
                </div>
    
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' 
                        min='0.01' 
                        step='0.01' 
                        value={enteredAmount} 
                        onChange={amountChangeHandler}/>
                    </div>
                </div>
    
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' 
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}  
                        onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        );
    }
 
};

export default ExpenseForm;