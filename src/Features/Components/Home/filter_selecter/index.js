import React, { useEffect, useState } from "react";
import "./style.css";
import { MakeTable,MakeTableMods } from "../table";

function SearchBar(data) {
  const [coursenamelist, setcoursenamelist] = useState([]);
  const [courseidset, setcourseidset] = useState([]);
  const [fileredData, setFilteredData] = useState([]);
  const [name, setname] = useState("");
  const [navbarState, setNavbarState] = useState(false);
  const [usecourse, setusecourse] = useState("");
  const [listcourse, setlistcourse] = useState([]);
  
  useEffect(() => {
    let Raw = data.studentsdata.map((d, index) => {
      return d.Course;
    });
    setlistcourse(Array.from(new Set(Raw)).sort());
  }, []);

  const Changebg = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbarState(true);
    } else {
      setNavbarState(false);
    }
  };

  window.addEventListener("scroll", Changebg);

  const handleFIlter = (event) => {
    const searchWord = event.target.value;

    setname(searchWord);
  };


  return (
    <>
      <div className="To_navvBar">
        <div className="search">
          <div className="searchInputs">
            <form>
              <input
                id="getname"
                type="text"
                placeholder="Search Nickname"
                value={name}
                onChange={handleFIlter}
                autoComplete="off"
              />
              <input type="submit" hidden />
            </form>
          </div>
        </div>

        <div className="searchSEA">
          <div className="searchInputs">
            <form>
              <input
                list="listclass"
                id="getCourse"
                placeholder="Ex: PHC/gen1/level1"
                autocomplete="off"
                onChange={(e) => setusecourse(e.target.value)}
              />
              <datalist id="listclass">
                {listcourse.map((n, i) => {
                  return <option>{n}</option>;
                })}
              </datalist>
            </form>
          </div>
        </div>
      
      </div>
      
      <MakeTable data={data.studentsdata} datamod={data.modsdata}  name={name} course={usecourse}  />
      
    </>
  );
}

export default SearchBar;
