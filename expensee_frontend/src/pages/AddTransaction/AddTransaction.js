import { useState, useEffect } from "react"
import { submitTransactionForm } from "../../api/postTransactionApi"
import Header from "../../components/Header/Header"
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

    const sendTransactionForm = (e) => {
        e.preventDefault();

        if (kategorie !== "Einkommen" && kategorie !== "Sparen") {
            setGeldbetrag(Math.abs(geldbetrag) * -1)
        }
        const token = props.token.token
        const userId = props.id
        const transactionId = props.user.transactions.length
        const newTransaction = {
            transactionId,
            Category: kategorie,
            Beschreibung: beschreibung,
            Geldbetrag: geldbetrag,
            Datum: datum
        }

        console.log(kategorie, beschreibung, geldbetrag, datum, token, userId)
        const response = submitTransactionForm('add', { userId, newTransaction, token })
        // if (response.message === "Success") 
        const temporaryUserData = props.user
        temporaryUserData.transactions.push(newTransaction)
        console.log(temporaryUserData)
        props.changeUserData(temporaryUserData)
        console.log(props.user)

        return
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
                        <option value="Sonstiges">Sontiges</option>
                    </select>
                    <input type="text" className="buttonBase transactionInput" placeholder="Beschreibung" className="buttonBase transactionInput" onChange={e => setBeschreibung(e.target.value)} />
                    <input type="number" className="buttonBase transactionInput" placeholder="Geldbetrag" className="buttonBase transactionInput" onChange={e => setGeldbetrag(e.target.value)} />
                    <input type="datetime-local" defaultValue={temp} className="buttonBase transactionInput" placeholder="Datum" className="buttonBase transactionInput" onChange={e => setDatum(e.target.value)} />
                    <input type="submit" className="buttonBase " value="Abschicken" onClick={sendTransactionForm} />
                </form>
            </div>
        </div>

    )
}

export default AddTransaction