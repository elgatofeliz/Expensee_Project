import { useState } from "react";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import Header from "../../components/Header/Header"
import { v4 as uuidv4 } from 'uuid';


const Transactions = (props) => {
    // states
    const [numberOfTransactions, setNumberOfTransactions] = useState(6)
    const [isShowFull, setIsShowFull] = useState(false)

    const user = props.user.transactions.slice(0, numberOfTransactions)

    // functions
    const showFull = () => {
        setIsShowFull(!isShowFull)
        if (!isShowFull) {
            setNumberOfTransactions(props.user.transactions.length)
        }
        else {
            setNumberOfTransactions(7)
        }
    }
    const loadMore = () => {
        setNumberOfTransactions(numberOfTransactions + 7)
    }
    return (
        <div>
            <Header title={"übersicht"} />
            <div className="Transactions">
                <div className="header">
                    <h2>Letzte Transaktionen</h2>
                    <div className="showFull" onClick={showFull} >
                        {!isShowFull ? 'Show full' : 'Hide full'}
                    </div>
                </div>
                <div className="transactionsList">
                    {user.map(i => <TransactionItem
                        key={uuidv4()}
                        title={i.description}
                        date={i.date}
                        amount={i.amount}
                        category={i.category}
                    />)}
                </div>
                <button className="mehr buttonBase" onClick={loadMore}>MEHR TRANSAKTIONEN</button>
            </div>
        </div>
    )
}
export default Transactions;