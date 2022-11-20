import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Radar } from "react-chartjs-2";

import "./chartPname.css";

// import { Chart } from 'react-charts'
export function BarSpecialMod(data_get){
  let labels = [
    "Teaching",
    "Attracttive",
    "Confident",
    "Course Quality",
    "Students Quality",
    "Problem"
  ];
  let data = {
    labels,
    datasets: [
      {
        label: "Special",
        data: data_get.data,
        backgroundColor: "Orange",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  let options = {
    color:'balck',
    scales: {
      y: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5, color:'balck',
        },
      },
      x:{ticks: {color:'balck'}}
    },
  };
  return (
    <>
      
        <Bar data={data} options={options} />
      
    </>
  );

}
export function LineStudentParticipant(data_get){

  let labels = data_get.data.map((n, i) => {
    return "Day" + (i + 1);
  });
  let data = {
    labels,
    datasets: [
      {
        label: "Number of students enrolled",
        data: data_get.data,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  let options = {
    color:'balck',
   
    scales: {
      
      y: {
        
        min: 0,
        ticks: {
          color: 'black',
        },
      },
      x:{
        ticks: {color: 'black'}
      }
    
    },
    
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
export function LineIntention(data_get){
 
  let labels = data_get.data.map((n, i) => {
    return "Day" + (i + 1);
  });
  let data = {
    labels,
    datasets: [
      {
        label: "Intention&Attendance",
        data: data_get.data,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  let options = {
    color:'balck',
   
    scales: {
      
      y: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1,color: 'black',
        },
      },
      x:{
        ticks: {color: 'black'}
      }
    
    },
    
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
export function BarSpecial(data_get) {
  
  console.log(data_get);
  let labels = [
    "Algorithm",
    "Solving Problem",
    "Creative",
    "Confident",
    "Communication",
    "Problem"
  ];
  let data = {
    labels,
    datasets: [
      {
        label: "Special",
        data: data_get.data,
        backgroundColor: "Orange",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  let options = {
    color:'balck',
    scales: {
      y: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5, color:'balck',
        },
      },
      x:{ticks: {color:'balck'}}
    },
  };
  return (
    <>
      
        <Bar data={data} options={options} />
      
    </>
  );
}
export function LineChartProblem(data_get) {
  if (!data_get.data || data_get.data.length < 0) return;
  let labels = data_get.data.map((n, i) => {
    return "Day" + (i + 1);
  });
  let data = {
    labels,
    datasets: [
      {
        label: "Problem Level",
        data: data_get.data,
        backgroundColor: "#B92323",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  let options = {
    color:'balck',
    scales: {
      y: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1, color:'balck',
        },
      },
      x:{ticks: {color:'balck'}}
    },
  };



  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
