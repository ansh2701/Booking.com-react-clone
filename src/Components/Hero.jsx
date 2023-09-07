import React, { useState } from "react";
import {
  faAngleDoubleDown,
  faBed,
  faCalendarDay,
  faSort,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Form, redirect } from "react-router-dom";


export const heroAction= async ({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  return data
  // return redirect("/hotels")
}


const Hero = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false)
  const [option, setOption] = useState({
    adults : 2,
    children: 0,
    rooms : 1
  })
  const [tempOption, setTempOption] = useState({
    adults : 2,
    children: 0,
    rooms : 1
  })
  
  function handleOpen(){
    setOpenOption(prev=>!prev)
    setTempOption(option)
  }

  return (
    <div className="hero">
      <div className="innerWidth heroContainer">
        <h1 className="heroTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="heroDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free
          <br /> Booking account
        </p>

        <Form action="/hotels" method="post" className="heroSearch">
        <div className="searchItems">
          <div className="searchItem">
            <FontAwesomeIcon    size="lg"   icon={faBed} />
            <input type="text" placeholder="Where are you going ?" name="place"/>
          </div>
          <div className="searchItem" onClick={() => setOpenDate((prev) => !prev)}>
            <FontAwesomeIcon    size="lg"   icon={faCalendarDay} />
            <span>
              {format(date[0].startDate, "EEE d MMM")} -{" "}
              {format(date[0].endDate, "EEE d MMM")}
            </span>
            {openDate && (
              <div className="datePicker" onClick={(e)=>e.stopPropagation()}>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    setDate([item.selection]);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              </div>
            )}
          </div>
          <div className="searchItem" onClick={handleOpen}>
            <FontAwesomeIcon    size="lg"   icon={faUser} />
            <span>{option.adults} adult • {option.children} children • {option.rooms} room</span>
            <FontAwesomeIcon icon={faAngleDoubleDown} size="sm" style={{color : "#006CE4"}}/>
            {openOption && 
            <div className="optionsContainer" onClick={e=>e.stopPropagation()}>
              {
              Object.keys(tempOption).map((key, index)=>{
                return(
                  <div className="option" key={index}>
                  <span>{key.replace(/^./, key[0].toUpperCase())}</span>
                  <div className="count">
                    <button className="icon" type="button" onClick={()=>setTempOption({...tempOption,[key]:tempOption[key]-1})} disabled={tempOption[key]===1 || key==="children" && tempOption[key]===0}>-</button>
                    {tempOption[key]}
                    <button className="icon" type="button" onClick={()=>setTempOption({...tempOption,[key]:tempOption[key]+1})}>+</button>
                  </div>
                </div>
                )
              })}
              <button className="btn" type="button" onClick={()=>{
                setOption(tempOption)
                setOpenOption(false)
                }}>Done</button>
            </div>
}
          </div>
          <input type="hidden" name="startDate" value={date[0].startDate}/>
          <input type="hidden" name="endDate" value={date[0].endDate}/>
          <input type="hidden" name="adults" value={option.adults}/>
          <input type="hidden" name="children" value={option.children}/>
          <input type="hidden" name="rooms" value={option.rooms}/>
          <div className="searchItem">
            <button className="searchBtn" type="submit">Search</button>
          </div>
          </div>
            
        </Form>
      </div>
    </div>
  );
};

export default Hero;
