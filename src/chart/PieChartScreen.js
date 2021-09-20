import React,{useState, useEffect} from "react";
import {Pie} from 'react-chartjs-2';
import {getPieData} from '../data/apiData';


const PieChartScreen = () => {

    const [confirmedData, setConfirmedData] = useState(0);
    const [deathsData, setDeathsData] = useState(0);

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0,90,100,0);
        const gradient1 = ctx.createLinearGradient(0,90,100,0);
        gradient.addColorStop(0,'#ff0c00');
        gradient.addColorStop(0.5,'#f2716b');
        gradient.addColorStop(1,'#fcaba7');

        gradient1.addColorStop(0,'#6dfc8a');
        gradient1.addColorStop(0.5,'#13eb3f');
        gradient1.addColorStop(1,'#c5fad0');

        return {
            labels : Array('Confirmed','Deaths'),
            datasets : [
                {
                    label: 'Confirmed',
                    data: Array(confirmedData,deathsData),
                    backgroundColor: Array(gradient1,gradient),
                    borderWidth:1
                }
            ]
        }


    }
    const options = {
        responsive :true,
        Pie : {
            allowPointSelect : true,
            cursor: 'pointer',
            dataLabels:{
                enabled : true,
                format : '<b>{point.name}</b>: { point.percentage:.1f } %'
            }

        }
    }

 const getChartData = async () => {
    try {
        let labelsArray =[];
        let confirmedData=  0;
        let deathsData = 0;
        const response = await getPieData();

        console.log('response c= ',response); 

        if ( response !== null ){
                const {confirmed, deaths} = response;
                const total = confirmed.value + deaths.value ;
                confirmedData = parseFloat( (( confirmed.value / total ) * 100).toFixed(2) );
                deathsData = parseFloat( (( deaths.value / total ) * 100).toFixed(2) );

                setConfirmedData(confirmedData);
                setDeathsData(deathsData);
        }
        
    } catch (error) {
        
    }

 }   

 useEffect(() => {
        getChartData();
 }, []);

    return (
        <Pie data={data} options={options} />
    );

}

export default PieChartScreen;