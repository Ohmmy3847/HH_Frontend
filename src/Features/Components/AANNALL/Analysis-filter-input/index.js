import React from "react";

export function FilterInput({placehover,name,handleFIlter}) {
  return (
    <div className="searchInputs">
      <form>
        <input
          id="getname"
          type="text"
          placeholder={placehover}
          value={name}
          onChange={handleFIlter}
        />
        <input type="submit" hidden />
      </form>
    </div>
  );
}
