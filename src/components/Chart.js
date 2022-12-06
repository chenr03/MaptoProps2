import React from 'react'
import PieChart from 'react-minimal-pie-chart';

const Chart = (props) => {
    console.log('Chart Props:', props)
    // create variable "over" with all the cars whose horsepower is >= 200
    const over = props.cars.filter((car) => car.horsepower >= 200).length;
    console.log('Over:', over);

    // create variable "under" with all the cars whose horsepower is < 200
    const under = props.cars.filter((car) => car.horsepower < 200).length;
    console.log('Under:', under)
    return (
        <div>
            <PieChart style={{ width: '200px' }}
                data={[
                    { title: 'Over', value: over, color: 'darkslateblue' },
                    { title: 'Under', value: under, color: 'royalblue' },
                ]}
                label
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small',
                }}
            />
            <Legend />
        </div>
    )
}

function Legend() {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: 'darkslateblue'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Over 200 </span>
            &nbsp;
            <span style={{background: 'royalblue'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Under 200 </span>
        </h6>
    )
}

export default Chart
