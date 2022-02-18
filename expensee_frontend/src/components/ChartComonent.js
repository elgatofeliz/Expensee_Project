import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);
Chart.defaults.elements.arc.borderWidth = 0;
const ChartComponent = (props) => {

    const state = {
        labels: ['Einkommen', 'Ausgeben', 'Sparen',
            'Sontiges'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#FF009D',
                    '#515FEB',
                    '#EFB722',
                    '#95989A'
                ],
                // hoverBackgroundColor: [
                //     '#501800',
                //     '#4B5000',
                //     '#175000',
                //     '#003350',
                // ],
                data: Object.values(props.userEASS)
            }
        ]
    }
    // Doughnut.defaults.elements.bar.borderWidth = 2;
    return (
        <div className="ChartComponents">
            <Doughnut
                className="doughnut"
                data={state}
                options={{
                    title: {
                        display: true,
                        // text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
            <div className="centerText">{props.sum} €</div>
        </div>
    )
}

export default ChartComponent
// https://www.chartjs.org/docs/latest/configuration/elements.html#:~:text=%23-,Arc%20Configuration,-Arcs%20are%20used