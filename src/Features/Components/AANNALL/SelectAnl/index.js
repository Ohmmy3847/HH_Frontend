import React, { useEffect, useState } from "react";
import "./style.css";
import BarAnals from "../BarAnal";
import FilterSelect from "../Analysis-filter-select";
import { FilterInput } from "../Analysis-filter-input";

export function AnalysisSearchBar({ students }) {
  const [fileredStudents, setFilteredStudents] = useState(students);
  const [filter, setFilter] = useState({});
  const [name, setname] = useState("");
  const [truefilter, settruefilter] = useState({});

  // const [chosenCourse, setusecourse] = useState("All Course");
  // const [usegen, setusegen] = useState("All Gen");
  // const [uselevel, setuselevel] = useState("All Level");
  // const [usecourse2, setusecourse2] = useState("All Course");
  // const [usegen2, setusegen2] = useState("All Gen");
  // const [uselevel2, setuselevel2] = useState("All Level");
  // const [saDa ,setsaDa] = ""
  // const [Goda,setGoda] = useState(false)
  console.log(students);
  useEffect(() => {
    if (students.length <= 0) return;

    let courses = Array.from(
      new Set(
        students.map((student, index) => {
          return student.course;
        })
      )
    ).sort();

    let gens = Array.from(
      new Set(
        students.map((student, index) => {
          return student.gen;
        })
      )
    ).sort();

    let levels = Array.from(
      new Set(
        students.map((student, index) => {
          return student.Level;
        })
      )
    ).sort();

    const newFilter = {
      courses,
      gens,
      levels,
    };

    setFilter(newFilter);
  }, [students]);

  useEffect(() => {
    if (students.length <= 0) return;
    if (truefilter && truefilter === {}) return settruefilter;
    // filter filteredStudents by filter.course, filter.gen, filter.level
    let filteredStudents = students.filter((student) => {
      if (filter.course && filter.course !== "All Course") {
        if (student.course !== filter.course) {
          return false;
        }
      }

      if (filter.gen && filter.gen !== "All Gen") {
        if (student.gen !== filter.gen) {
          return false;
        }
      }

      if (filter.level && filter.level !== "All Level") {
        if (student.level !== filter.level) {
          return false;
        }
      }

      return true;
    });

    setFilteredStudents(filteredStudents);
  }, [filter]);

  useEffect(() => {
    if (students.length <= 0) return;

    const nameFilteredStudents = fileredStudents.filter((student) => {
      return student.nick.includes(name);
    });
    setFilteredStudents(nameFilteredStudents);
  }, [name]);

  if (students.length === 0) {
    return <div>No students found</div>;
  }

  console.log(name);

  return (
    <>
      <div className="All_Choch">
        {/* <FilterInput placehover="Serch Name" name handleFIlter/> */}
        <FilterSelect
          setData={(newCourse) => setFilter({ ...filter, courses: newCourse })}
          data={filter.courses}
          name="All Course"
        />
        <FilterSelect
          setData={(newGen) => setFilter({ ...filter, gens: newGen })}
          data={filter.gens}
          name="All Gen"
        />
        <FilterSelect
          setData={(newLvl) => setFilter({ ...filter, levels: newLvl })}
          data={filter.levels}
          name="All Level"
        />
        <h1>VS</h1>
        <FilterSelect
          setData={(newCourse) => setFilter({ ...filter, courses: newCourse })}
          data={filter.courses}
          name="All Course"
        />
        <FilterSelect
          setData={(newGen) => setFilter({ ...filter, gens: newGen })}
          data={filter.gens}
          name="All Gen"
        />
        <FilterSelect
          setData={(newLvl) => setFilter({ ...filter, levels: newLvl })}
          data={filter.levels}
          name="All Level"
        />
      </div>
      <BarAnals
        students={fileredStudents}
        newCourse={(newCourse) => setFilter({ ...filter, courses: newCourse })}
      />
    </>
  );
}
