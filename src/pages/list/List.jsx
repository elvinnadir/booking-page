import React, { useState } from 'react'
import "./list.css"
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/searchItem/SearchItem'



const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list_container">
        <div className="list_wrapper">
          <div className="list_search">
            <h1 className="list_search_title">Search</h1>
            <div className="list_search_item">
              <label htmlFor="destination">Destination</label>
              <input type="text"
                id='destination'
                placeholder={destination}
              />
            </div>
            <div className="list_search_item">
              <label htmlFor="check-in">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to 
              ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (<DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
              )}
            </div>
            <div className="list_item">
              <label>Option</label>
              <div className="list_options">
                <div className="list_option_item">
                  <span className="list_option_text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='list_option_input' />
                </div>
                <div className="list_option_item">
                  <span className="list_option_text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='list_option_input' />
                </div>
                <div className="list_option_item">
                  <span className="list_option_text">
                    Adult
                  </span>
                  <input min={1} type="number"
                    placeholder={options.adult}
                    className='list_option_input'
                  />
                </div>
                <div className="list_option_item">
                  <span className="list_option_text">
                    Children
                  </span>
                  <input min={0} type="number"
                    placeholder={options.children}
                    className='list_option_input'
                  />
                </div>
                <div className="list_option_item">
                  <span className="list_option_text">
                    Room
                  </span>
                  <input min={1} type="number"
                    placeholder={options.room}
                    className='list_option_input'
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list_result">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          </div>
        </div>
      </div>
    </div >
  )
}

export default List
