import React, { useState } from "react";
import "./style.css";
import { StudentaverageChart, StudentComefrom } from "../BarClass";
import { useEffect } from "react";
import { BarChartClass } from "../BarClass";

function averageforSpecial(dataa, access, i) {
  let filteredData = dataa.filter(({ nick }) => nick == nick);
  let Exi =
    filteredData.reduce(
      (r, c) =>
        parseFloat(r) +
        parseFloat(c[access].split(",")[i] || 0),
      0
    ) / filteredData.length;

  return Exi;
}
function averageforP_rank(dataa, access) {
  let filteredData = dataa.filter(({ nick }) => nick == nick);
  let Exi =
    filteredData.reduce(
      (r, c) => parseFloat(r) + parseFloat(c[access].split("\n===\n")[1] || 0),
      0
    ) / filteredData.length;

  return Exi;
}
function groupBy2(xs, prop) {
  var grouped = [];
  for (var i = 0; i < xs.length; i++) {
    var p = xs[i][prop]==undefined?"-":xs[i][prop].toLowerCase().replace(' ','');
    if (!grouped[p]) {
      grouped[p] = [];
    }
    grouped[p].push(xs[i]);
  }
  return grouped;
}

export function SearchBarAnal(data) {
  const [filtdataforstudent, setfiltdataforstudent] = useState([]);
  const [filtdataforMod, setfiltdataforMod] = useState([]);
  var student = [];
  var comefrom = [];
  var listCourse = [];
  let listnextCourse = [];
  data.useClass.map((n, i) => {
    student[i] = [];
    filtdataforstudent[i] = data.studentsdata.filter(function (N) {
      return N.Course == n[0];
    });
    filtdataforMod[i] = data.modsdata.filter(function (N) {
      return N.Course == n[0];
    });
    student[i] = [
      averageforSpecial(filtdataforstudent[i], "Stat", 0) || 0,
      averageforSpecial(filtdataforstudent[i], "Stat", 1) || 0,
      averageforSpecial(filtdataforstudent[i], "Stat", 2) || 0,
      averageforSpecial(filtdataforstudent[i], "Stat", 3) || 0,
      averageforSpecial(filtdataforstudent[i], "Stat", 4) || 0,
      averageforP_rank(filtdataforstudent[i], "Serious"),
    ];
    comefrom[i] = groupBy2(filtdataforstudent[i], "ComeFrom");
  });
  listCourse = comefrom.map((n, i) => {
    
    return Object.keys(n);
  });
  listCourse.map((n, i) => {
    n.map((N, I) => {
      if (!listnextCourse.includes(N)) {
        listnextCourse.push(N);
      }
    });
  });

  return (
    <>
      <div className="Dashboard">
        <center>
          <div className="StudentaverageChart">
            <StudentaverageChart data={student} useClass={data.useClass} />
          </div>
          <div className="StudentComefrom">
            <StudentComefrom
              data={comefrom}
              useClass={data.useClass}
              data_list={listnextCourse}
            />
          </div>
        </center>
      </div>
    </>
  );
}
