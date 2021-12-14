import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { getdataDaily, getDataApi } from '../data/apiData';



const BarChartScreen = () => {
    const [lablesData, setLabelsData] = useState([]);
    const [confirmedData, setConfirmedData] = useState([]);
    const [deathsData, setdeathsData] = useState([]);


    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 90, 100, 0);
        const gradient1 = ctx.createLinearGradient(0, 90, 100, 0);
        gradient.addColorStop(0, '#ff0c00');
        gradient.addColorStop(0.5, '#f2716b');
        gradient.addColorStop(1, '#fcaba7');

        gradient1.addColorStop(0, '#6dfc8a');
        gradient1.addColorStop(0.5, '#13eb3f');
        gradient1.addColorStop(1, '#c5fad0');

        return {
            labels: lablesData,
            datasets: [{
                    fill: false,
                    label: 'Confirmed',
                    data: confirmedData,
                    backgroundColor: gradient1,
                    borderColor: gradient1,
                    borderWidth: 5
                },
                {
                    fill: false,
                    label: 'Deaths',
                    data: deathsData,
                    backgroundColor: gradient,
                    borderColor: gradient,
                    borderWidth: 5
                }
            ]
        }
    }
    const options = {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: 'rgba(242,38,19,1)'
            }
        },

    }

    const getChartData = async() => {
        try {
            let labelsArray = [];
            let confirmedArray = [];
            let deathsArray = [];

            const data = await getdataDaily('09-28-2021');
            data.forEach(element => {
                labelsArray.push(element.reportDate);
                confirmedArray.push(element.confirmed.total);
                deathsArray.push(element.deaths.total);
            });

            console.log('data', data);

            setLabelsData(labelsArray);
            setConfirmedData(confirmedArray);
            setdeathsData(deathsArray);

        } catch (error) {

        }
    }

    useEffect(() => {
        getChartData();
        return () => {

        }
    }, [])

    return ( <
        Bar data = { data }
        options = { options }
        />
    )
}

export default BarChartScreen;