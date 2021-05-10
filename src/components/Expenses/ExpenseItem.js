import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    const [expenseTitle, setExpenseTitle] =  useState(props.expenseTitle);


    const clickHandler = () => {
        setExpenseTitle('Updated!!!');
        console.log('thanksss');
    };

    return (        
        <li>
            <Card className="expense-item">
                <ExpenseDate expenseDate={props.expenseDate}/>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">{props.expenseAmount}</div>
                    <button onClick={clickHandler}>Change title</button>
                </div>
            </Card>
        </li>
    ) ;
}

export default ExpenseItem;