import { useEffect } from 'react'
import Header from "../../components/Header/Header"
import EASS from "../../components/EASS/EASS"
import ChartComponent from "../../components/ChartComonent"
const { isAuthenticated } = require("../../api/isAuthenticated.js")

const Chart = (props) => {
    props.setTitle(false)
    props.setTitleChart(true)
    props.setTitleTrans(false)

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
                        detailList={props.user.transactions.filter(i => i.category === "Einkommen")}
                        amount={props.user.EASS.Einkommen} />
                    <EASS title='Ausgeben' backColor='#515FEB'
                        detailList={props.user.transactions.filter(i =>
                            i.category === "Lebensmittel" ||
                            i.category === "Shopping" ||
                            i.category === "Wohnung" ||
                            i.category === "Restaurant"
                        )}
                        amount={props.user.EASS.Ausgeben} />
                    <EASS title='Sparen' backColor='#EFB722'
                        detailList={props.user.transactions.filter(i => i.category === "Sparen")}
                        amount={props.user.EASS.Sparen} />
                    <EASS title='Sontiges' backColor='#95989A'
                        detailList={props.user.transactions.filter(i =>
                            i.category !== "Lebensmittel" &&
                            i.category !== "Shopping" &&
                            i.category !== "Wohnung" &&
                            i.category !== "Sparen" &&
                            i.category !== "Einkommen"
                        )}
                        amount={props.user.EASS.Sonstiges} />
                </div>
            </div>
        </div>
    )
}

export default Chart