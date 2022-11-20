import axios from "axios";
import React, { useEffect, useState } from "react";
// import SearchBar from "../filter_selecter";
import "./style.css";
import { AnalysisSearchBar } from "./SelectAnl";
// import AnalPaGe from "../../../page/Analyze";
// import About from "../../../page/About";

export function AnalSceen() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const getStudent = async () => {
    const res = await axios.get("https://backend-of-hamsterhub.herokuapp.com/D_STUDENTS/");//https://backend-of-hamsterhub.herokuapp.com/D_STUDENTS/
    console.log(res.data);
    return res.data;
  };
  useEffect(() => {
    getStudent().then((res) => {
      setStudents(res);
    });
  }, []);
  console.log(students);

  return (
    <>
      <div className="Navbard"></div>
      {students && <AnalysisSearchBar  students={students} />} 
    </>
  );
}
