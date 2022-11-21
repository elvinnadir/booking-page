import React, { useState } from 'react'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './header.css'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState("")
    const [openOptions, setOpenOptions] = useState(false)
    const [destination, setDestination] = useState("")

    const navigate = useNavigate()
    const [options, setOptions] = useState({
        adult: 1,
        children: 2,
        room: 1,
    })


    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === "i"
                ? options[name] + 1
                : options[name] - 1,
        }))
    }

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    return (
        <div className='header'>
            <div className={type === "list"
                ? "header_container listMode"
                : "header_container"}>

                <div className="header_list">
                    <div className="header_list_items active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header_list_items">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header_list_items">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>
                    <div className="header_list_items">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="header_list_items">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                {type !== "list" && (
                    <>
                        <h1 className="header_title">Lifetime discounts?.Real in here</h1>
                        <p className="header_description">  Get rewarded for your travels – unlock instant savings of 10% or
                            more with a free Lamabooking account</p>
                        <button className="header_btn">Sign in / Register</button>

                        <div className="header_search">
                            <div className="header_search_item">
                                <FontAwesomeIcon icon={faBed} className="header_icon" />
                                <input type="text"
                                    placeholder='Where are you going?'
                                    className='header_search_input'
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="header_search_item">
                                <FontAwesomeIcon icon={faCalendarDays} className="header_icon" />
                                <span onClick={() => setOpenDate(!openDate)}
                                    className='header_search-text'>
                                    {`
                            ${format(date[0].startDate, "MM/dd/yyy")} to
                            ${format(date[0].endDate, "MM/dd/yyy")}
                            `}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                                }
                            </div>
                            <div className="header_search_item">
                                <FontAwesomeIcon icon={faPerson} className="header_icon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className='header_search-text'>
                                    {`${options.adult} adult - ${options.children} children - ${options.room} room `}
                                </span>
                                {openOptions && <div className="options">
                                    <div className="option_item">
                                        <span className="option_text">Adult</span>
                                        <div className="option_counter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="option_counter_btn"
                                                onClick={() => handleOption("adult", "d")}
                                            >-</button>
                                            <span className="option_counter_num">{options.adult}</span>
                                            <button className="option_counter_btn"
                                                onClick={() => handleOption("adult", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="option_item">
                                        <span className="option_text">Children</span>
                                        <div className="option_counter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="option_counter_btn"
                                                onClick={() => handleOption("children", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="option_counter_num">{options.children}</span>
                                            <button className="option_counter_btn"
                                                onClick={() => handleOption("children", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="option_item">
                                        <span className="option_text">Room</span>
                                        <div className="option_counter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="option_counter_btn"
                                                onClick={() => handleOption("room", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="option_counter_num">{options.room}</span>
                                            <button className="option_counter_btn"
                                                onClick={() => handleOption("room", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="header_search_item">
                                <button className="header_btn"
                                    onClick={handleSearch}
                                >Search</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header
