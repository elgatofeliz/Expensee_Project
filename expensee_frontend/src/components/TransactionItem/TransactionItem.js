const TransactionItem = (props) => {

    return (
        <div className="TransactionItem">
            <div className="circle"
                style={(props.amount > 0) ? { backgroundColor: '#00FF00' } : null}
            ></div>
            <div className="titleAndDate">
                <div className="title">{props.title}</div>
                <div className="date">{props.date.replace('T', '    ')}</div>
            </div>
            <div className="amount">{props.amount}€</div>
        </div>
    )
}
export default TransactionItem;