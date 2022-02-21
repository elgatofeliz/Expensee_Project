import { useEffect } from 'react'
import Header from "../../components/Header/Header"
import EASS from "../../components/EASS/EASS"
import ChartComponent from "../../components/ChartComonent"

const Chart = (props) => {
    return (
        <div>
            <Header title={"Statistik"} />
            <div className="Chart">
                <ChartComponent userEASS={props.user.EASS} sum={props.user.sumEASS} />
                <div className="colorDefinitions">
                    <div className="Ered littleCircle"></div>
                    <div className="Einkommen">Einkommen</div>
                    <div className="Ablue littleCircle" ></div>
                    <div className="Ausgeben">Ausgeben</div>
                    <div className="Syellow littleCircle"></div>
                    <div className="Sparen">Sparen</div>
                    <div className="Sgray littleCircle"></div>
                    <div className="Sontiges">Sonstiges</div>
                </div>
                <div className="EASS">
                    <EASS title='Einkommen' backColor='linear-gradient(90deg, #F63535 0%, #FF009D 100%)'
                        detailList={props.user.transactions.filter(i => i.Category === "Einkommen")}
                        amount={props.user.EASS.Einkommen} />
                    <EASS title='Ausgeben' backColor='#515FEB'
                        detailList={props.user.transactions.filter(i =>
                            i.Category === "Lebensmittel" ||
                            i.Category === "Shopping" ||
                            i.Category === "Wohnung" ||
                            i.Category === "Restaurant"
                        )}
                        amount={props.user.EASS.Ausgeben} />
                    <EASS title='Sparen' backColor='#EFB722'
                        detailList={props.user.transactions.filter(i => i.Category === "Sparen")}
                        amount={props.user.EASS.Sparen} />
                    <EASS title='Sontiges' backColor='#95989A'
                        detailList={props.user.transactions.filter(i =>
                            i.Category !== "Lebensmittel" &&
                            i.Category !== "Shopping" &&
                            i.Category !== "Wohnung" &&
                            i.Category !== "Sparen" &&
                            i.Category !== "Einkommen"
                        )}
                        amount={props.user.EASS.Sonstiges} />
                </div>
            </div>
        </div>
    )
}

export default Chart