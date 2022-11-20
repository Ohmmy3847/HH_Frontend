import axios from "axios";

// import { StudentCard } from "../student_card";
import logo from "../../../true_Logo.png";
import React, { useEffect, useState } from "react";
// import MyChart from "../BarChar"

// import { BarChartClass } from "./BarClass";

import "./style.css";
import { SearchBarAnal } from "./Classserch";
// import { StackedBar100Chart } from "../BarClass"
function isNum(val) {
  return !isNaN(val);
}
export function ClassSceen() {
  const [likedCount, setLikedCount] = useState("notready");
  const [students, setStudents] = useState([]);
  const [course, setcourse] = useState([]);

  
  const [searchCourse, setsearchCourse] = useState("");
 
  const [useClass, setuseClass] = useState([]);

  const [userow, setuserow] = useState("");
  

  const getStudent = async () => {
    const response = await axios.get(
      "https://hhbackendhamster.herokuapp.com/Data"
    );

    const data = await response.data;

    // setStudents(JSON.parse(JSON.stringify(data)));
    setStudents(JSON.parse(JSON.stringify(data)));
    setLikedCount("ready");

    // console.log(JSON.stringify(data));
  };
  
  function handleFIlter(event, index) {
    setsearchCourse(event.target.value);
    setuserow(index);
    useClass[index] = [event.target.value, colorArray[index]];
  }
  useEffect(() => {
    
    getStudent();
  }, []);
  let modsdata = students.filter(function (n) {
    return n["Status"||"status"||"STATUS"] == "MOD";
  });

  let studentsdata = students.filter(function (n) {
    return n["Status"||"status"||"STATUS"] == "Paid / Line";
  });

  let Rawcourse = students.map((d, index) => {
    return d.Course;
  });
  let Sets_course = Array.from(new Set(Rawcourse)).sort();
  const rows = [];
  for (var i = 0; i < 9; i++) {
    rows.push(i);
  }
  var colorArray = [
    "#B92323",
    "#2a71d0",
    "#FF33FF",
    "#008000 ",
    "purple",
    "blue",
    "orange",
    "black",
    "white",
  ];

  let res = useClass.filter(function (cItem, i) {
    return Sets_course.find(function (aItem, index) {
      return cItem[0] == aItem;
    });
  });
  console.log(res);
  return (
    <>
      {likedCount !='ready' ? (
        <>
          <img src={logo} class="rotate" width="120" height="100" />
          <h2>Loading ...</h2>
        </>
      ) : (
        <>
          <div id="box_compare_class" className="box_compare_class">
            <h1>Course Comparison</h1>

            {rows.map((i) => {
              return (
                <div className="PutInline">
                  <div
                    className="colorS"
                    style={{ backgroundColor: colorArray[i] }}
                  ></div>
                  <form>
                    <input
                      className="inputStlYe"
                      autocomplete="off"
                      key={"item" + i}
                      type="text"
                      list="listclass"
                      id={"getloopclass" + i}
                      placeholder={Sets_course[i] || "NSC/gen1/level2"}
                      // value= {  }
                      onChange={(e) => handleFIlter(e, i)}
                    />{" "}
                    <datalist id="listclass">
                      {Sets_course.map((n, i) => {
                        return <option value={n}></option>;
                      })}
                    </datalist>
                    {/* <input type="reset" value="X" /> */}
                  </form>
                  <br />
                </div>
              );
            })}
            {/* {res.map((N, I) => {
          return (
            <>
              <h3 style={{marginLeft:'2%', textAlign:"left"}}>{I + 1 + ". " + N[0] + " " + filtdata[I].length + "คน"} </h3>
            </>
          );
        })} */}
          </div>
          <SearchBarAnal
            alldata={students}
            modsdata={modsdata}
            studentsdata={studentsdata}
            useClass={res}
          />
        </>
      )}
    </>
  );
}
