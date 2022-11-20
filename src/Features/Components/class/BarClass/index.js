import React, { useEffect, useState } from "react";
import { Bar, Pie, Line, Scatter } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import "./style.css";

export function StudentaverageChart(data_get) {
  let labels = [
    "Algorithm",
    "Solving Problem",
    "Creative",
    "Confident",
    "Communication",
    "Problem",
  ];
  let data = {
    labels,
    datasets: data_get.data.map((n, i) => {
      return {
        label: data_get.useClass[i][0],
        data: data_get.data[i],
        backgroundColor: data_get.useClass[i][1],
        borderColor: "black",
        borderWidth: 2,
      };
    }),
  };
  let options = {
    plugins: {
      title: {
        display: true,
        text: "Status",
        font: {
          family: "Comic Sans MS",
          size: 37,
          weight: "bold",
          lineHeight: 1.2,
          color: "black",
        },
      },
    },
    color: "balck",
    scales: {
      y: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5,
          color: "balck",
        },
      },
      x: { ticks: { color: "balck" } },
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}
export function StudentComefrom(data_get) {
  let labels = Array.from(new Set(data_get.data_list));
  console.log(data_get);
  let dataa = {
    labels,
    datasets: data_get.data.map((n, i) => {
      return {
        label: data_get.useClass[i][0],
        data: labels.map((N, I) => {
          return data_get.data[i] == undefined
            ? 0
            : data_get.data[i][N] == undefined
            ? 0
            : data_get.data[i][N].length;
        }),
        backgroundColor: data_get.useClass[i][1],
        borderColor: "black",
        borderWidth: 2,
      };
    }),
  };
  // let listnextCourse = [];

  // let listCourse = data.data.map((n, i) => {
  //   return Object.keys(n);
  // });
  // listCourse.map((n, i) => {
  //   n.map((N, I) => {
  //     if (!listnextCourse.includes(N)) {
  //       listnextCourse.push(N);
  //     }
  //   });
  // });

  // let labels = Array.from(new Set(listnextCourse));
  // console.log(labels);
  // let dataa = {
  //   labels,
  //   datasets: data.listchoose.map((nB,iB)=>{
  //     return{
  //           label:
  //             data.listchoose == undefined
  //               ? "<No Data>"
  //               : data.listchoose[iB] == undefined
  //               ? "<No Data>"
  //               : data.listchoose[iB][0],
  //           data:
  //           labels == []
  //                   ? []
  //                   : labels.map((n, i) => {
  //                       return data.data[iB] == undefined
  //                         ? 0
  //                         : data.data[iB][n]== undefined?0:data.data[iB][n].length;
  //                     }),
  //                     backgroundColor:
  //         data.listchoose[iB] == undefined || ""
  //           ? "<No Data>"
  //           : data.listchoose[iB][1],
  //       borderColor:
  //         data.listchoose[iB] == undefined || ""
  //           ? "<No Data>"
  //           : data.listchoose[iB][1],
  //           borderColor: "black",
  //       borderWidth: 2,

  //   }})

  // }
  let options = {
    plugins: {
      title: {
        display: true,
        text: "Come from",
        font: {
          family: "Comic Sans MS",
          size: 37,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
    },
    color: "balck",
    scales: {
      y: {
        min: 0,
        ticks: {
          stepSize: 0.5,
          color: "balck",
        },
      },
      x: { ticks: { color: "balck" } },
    },
  };

  return (
    <>
      <Bar data={dataa} options={options} />
    </>
  );
}
