import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const EASS = ({ title, amount, detailList, backColor }) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className="EASS">
            <div className='buttonBase'
                style={{ background: backColor }}
                onClick={() => setIsClicked(!isClicked)} >
                {title}: {amount} €
            </div>
            {isClicked &&
                <div className="details">
                    {detailList.map(i =>
                        <div className="transactionDetails" key={uuidv4()}>

                            <p>{i.description}</p>
                            <p>{i.amount}€</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
export default EASS;



