import Chart from '../Chart/Chart';
const ExpensesChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mrc', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'June', value: 0 },
        { label: 'July', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const expense of props.expenses) { //of: array, in: object
        const expenseMonth = expense.date.getMonth(); //starting at zero => Jan
        chartDataPoints[expenseMonth].value += expense.amount;
        console.log(chartDataPoints[expenseMonth].value);
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;