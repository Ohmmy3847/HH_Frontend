import axios from "axios";
// import { StudentCard } from "../student_card";

import React, { useEffect, useState } from "react";
// import MyChart from "../BarChar"
import SearchBar from "./filter_selecter";
import "./style.css";
import logo from "../../../true_Logo.png";
function isNum(val) {
  return !isNaN(val);
}

export function HomeSceen() {
  const [likedCount, setLikedCount] = useState("not ready");
  const [students, setStudents] = useState([]);
  const [course, setcourse] = useState([]);
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

  useEffect(() => {
    getStudent();
  }, []);
  let modsdata = students.filter(function (n) {
    return n["Status"] == "MOD";
  });

  let studentsdata = students.filter(function (n) {
    return n["Status"] == "Paid / Line" |"Paid";
  });


  return (
    <>
      {likedCount != "ready" ? (
        <>
          <div>
            <img src={logo} class="rotate" width="120" height="100" />
            <h2>Loading...</h2>
          </div>
        </>
      ) : (
        <SearchBar
          modsdata={modsdata}
          studentsdata={studentsdata}
          courseID={course}
        />
      )}
    </>
  );
}
