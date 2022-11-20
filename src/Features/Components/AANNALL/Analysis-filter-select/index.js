import React from 'react'

export default function FilterSelect({setData,data,name}) {
  console.log(data)
  if( !data || data.length <= 0 ) return
  return (
    <div className="C_Choch">
          <form>
            <select onChange={(e) => setData([e.target.value])}>
              <option value={name}>{name}</option>
              {data.map((item, i) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </form>
        </div>
  )
  console.log(data)
}
