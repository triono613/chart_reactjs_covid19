import React from "react";
import BarChartScreen from "../chart/BarChartScreen";
import LineChartScreen from "../chart/LineChartScreen";
import PieChartScreen from "../chart/PieChartScreen";

import BarChart from "../components/BarChart";


import styles from './HomeScreen.module.css';

const HomeScreen = () => {

    return (
    <div className="container-fluid">
        <h3 className={styles.headerText}>Dashboard</h3>
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2 ">
                    <h4 className="">Bar Chart</h4>
                    <BarChartScreen />
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2 ">
                    <h4 className="">Line Chart</h4>
                    <LineChartScreen />
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2 ">
                    <h4 className="">Bar Chart</h4>
                    <BarChart />
                </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2 ">
                    <h4 className="">Pie Chart</h4>
                    <PieChartScreen />
                </div>
            </div>
        </div>
    </div>
    );

}

export default HomeScreen;