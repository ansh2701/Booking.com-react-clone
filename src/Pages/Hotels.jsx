import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { Form, useActionData } from 'react-router-dom'
import {format} from 'date-fns'
import HotelCard from '../Components/HotelCard'

const Hotels = () => {
  const data = useActionData()
  console.log(data?.startDate)
  const [date, setDate] = useState([
    {
      startDate: data && new Date(data?.startDate )  || new Date(),
      endDate: data && new Date(data?.endDate) || new Date(),
      key: "selection",
    },
  ]);
  const [openDate,setOpenDate] = useState(false)
  console.log(data)
  return (
    <div className='listWrapper'>
      <div className="innerWidth listContainer">
        <Form method="put" className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label htmlFor="place">Destination</label>
            <input type="text" name="place" defaultValue={data?.place} />
          </div>
          <div className="lsItem">
            <label htmlFor="place">Check-in Date</label>
            <span onClick={()=>setOpenDate(prev=>!prev)}>
              {format(date[0].startDate, "EEE d MMM")} -{" "}
              {format(date[0].endDate, "EEE d MMM")}
            </span>
            {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    setDate([item.selection]);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
            )}
          </div>
          <div className="lsItem">
            <label htmlFor="option">Option</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
              <span>Min price <small>per night</small></span>
              <input type="number" name="minprice"/>
            </div>
            <div className="lsOptionItem">
              <span>Max price <small>per night</small></span>
              <input type="number" name="maxprice"/>
            </div>
            <div className="lsOptionItem">
              <span>Adults</span>
              <input type="number" min={1} name="adults" defaultValue={data?.adults || 2}/>
            </div>
            <div className="lsOptionItem">
              <span>Children</span>
              <input type="number" name="children" min={0} defaultValue={data?.children || 0}/>
            </div>
            <div className="lsOptionItem">
              <span>Rooms</span>
              <input type="number" name="rooms" min={1} defaultValue={data?.rooms || 1}/>
            </div>
            </div>
          </div>
          <button className="btn">Search</button>
        </Form>
        <div className="listResult">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </div>
  )
}

export default Hotels