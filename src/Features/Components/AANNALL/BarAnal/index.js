import React, { useState } from "react";
import "./style.css";
import { Line } from "react-chartjs-2";

export default function BarAnals({ students , newCourse}) {
  console.log(newCourse)
  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //   datasets: [
  //     {
  //       label: student1.course,
  //       data: [33, 53, 85, 41, 44, 65],
  //       fill: false,
  //       // backgroundColor: "rgba(75,192,192,0.2)",
  //       borderColor: "rgba(75,192,192,1)"
  //     },
  //     {
  //       label: student2.course,
  //       data: [33, 53, 85, 41, 44, 65],
  //       fill: false,
  //       borderColor: "#742774"
  //     }
  //   ]
  // };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: students.map((student, index) => {
      return {
        label: student.newCourse,
        data: [Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100],
        fill: false,
        borderColor: `rgba(${(Math.random()*256)}, ${(Math.random()*256)}, ${(Math.random()*256)}, 1)`,
      };
    }),
  };
  console.log(data,'fdfff')

  return (
    <>
      <div className="BarAnaL">
        <Line data={data} className="BBaraL"/>
      </div>
      <div className="RiGhTanal1">{/* <h1>{students[0]?.nick}</h1> */}</div>
      <div className="RiGhTanal2"></div>
    </>
  );
}
