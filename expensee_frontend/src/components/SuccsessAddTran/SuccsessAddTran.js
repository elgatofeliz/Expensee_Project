
import React from 'react'
import { useState } from "react"
const SuccsessAddTran = (props) => {

    const toggleClose = () => props.setClose(!props.close)

    return (
        <div>
            <section className={props.close ? 'SuccsessAddTran' : 'closeSuccsess'}>
                <article className="succsessHeader">
                    <p>Erfolgreich eingetragen!</p>
                </article>
                <article className="succsessMain">
                    <div className="date">
                        <div>
                            <h4>Datum</h4>
                            <p>{props.date}</p>
                        </div>
                        <div>
                            <h4>Zeit</h4>
                            <p>{props.time}</p>
                        </div>
                    </div>
                    <div className="kategorieSumme">
                        <h4>Kategorie</h4>
                        <p>{props.category}</p>
                    </div>
                    <div className="kategorieSumme">
                        <h4>Summe</h4>
                        <p>{props.amount}</p>
                    </div>
                    <button onClick={toggleClose}>Close</button>
                </article>
            </section>
        </div>
    );
}

export default SuccsessAddTran;