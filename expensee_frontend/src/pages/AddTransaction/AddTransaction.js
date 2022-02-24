import { useState, useEffect } from "react"
import { submitTransactionForm } from "../../api/postTransactionApi"
import Header from "../../components/Header/Header"
import SuccsessAddTran from "../../components/SuccsessAddTran/SuccsessAddTran"
let temp = new Date().toISOString().substring(0, (new Date().toISOString().indexOf("T") | 0) + 6 | 0)


const AddTransaction = (props) => {
    props.setTitle(true)
    props.setTitleChart(false)
    props.setTitleTrans(false)
    // states
    const [kategorie, setKategorie] = useState('')
    const [beschreibung, setBeschreibung] = useState('')
    const [geldbetrag, setGeldbetrag] = useState(0)
    const [datum, setDatum] = useState(temp)

    const [close, setClose] = useState(false)

    // reRender nach neue Transaktion
    // useEffect(,[])
    const sendTransactionForm = (e) => {
        e.preventDefault();
        let tempAmount;
        if (kategorie !== "Einkommen" && kategorie !== "Sparen") {
            tempAmount = geldbetrag * -1
        }
        else {
            tempAmount = geldbetrag
        }

        const userId = props.user._id
        console.log(userId)
        // const userId = "6213731588351006f85c4b3b";
        const transactionId = props.user.transactions.length
        const newTransaction = {
            transactionId,
            category: kategorie,
            description: beschreibung,
            amount: tempAmount,
            date: datum
        }
        // if (status === "acknowledged"){
        //     console.log("Hat geklappt hier sind die daten")
        // }else(
        //     console.log("Hat nicht  geklappt etwas fehlt")
        // )
        // console.log(responseAddtoDB.dbResponse.acknowledged)
        console.log('new Transactions', newTransaction)
        submitTransactionForm('add', { userId, newTransaction })
            .then((response) => {
                console.log(response.status)
                if (response.status === "acknowledged") {
                    setClose(true)
                    console.log("Hat geklappt hier sind die daten")
                    props.setNewTransaction(newTransaction + 1)
                } else (
                    console.log("Hat nicht  geklappt etwas fehlt")
                )
            }
            );
        // um nochmal fetchUserData in app.js zu triggern


        // if (response.message === "Success") 
        // const temporaryUserData = props.user
        // temporaryUserData.transactions.push(newTransaction)
        // console.log(temporaryUserData)
        // props.changeUserData(temporaryUserData)
        // console.log(props.user)
    }
    //Backend-Logik spuckt eine response aus
    return (
        <div>
            <Header title={""} />
            <div className="AddTransaction">
                <h2>Umsätze</h2>
                <form action="">
                    <select name="Kategorie" id="" className="buttonBase transactionInput" onChange={e => setKategorie(e.target.value)}>
                        <option value="" disabled selected hidden>Kategorie</option>
                        <option value="Einkommen">Einkommen</option>
                        <option value="Lebensmittel">Lebensmittel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Wohnung">Wohnung</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Sparen">Sparen</option>
                        <option value="Sonstiges">Sonstiges</option>
                    </select>
                    <input type="text" className="buttonBase transactionInput" placeholder="Beschreibung" className="buttonBase transactionInput" onChange={e => setBeschreibung(e.target.value)} />
                    <input type="number" className="buttonBase transactionInput" placeholder="Geldbetrag" className="buttonBase transactionInput" onChange={e => setGeldbetrag(e.target.value)} />
                    <input type="datetime-local" defaultValue={temp} className="buttonBase transactionInput" placeholder="Datum" className="buttonBase transactionInput" onChange={e => setDatum(e.target.value)} />
                    <input type="submit" className="buttonBase " value="Abschicken" onClick={sendTransactionForm} />
                </form>
            </div>
            <SuccsessAddTran
                category={kategorie}
                amount={geldbetrag}
                date={datum.toString().slice(0, 10)}
                time={datum.toString().slice(11, 16)}
                className={close ? 'closeSuccsess' : 'SuccsessAddTran'}
                close={close}
                setClose={setClose}
            />
        </div>

    )
}

export default AddTransaction