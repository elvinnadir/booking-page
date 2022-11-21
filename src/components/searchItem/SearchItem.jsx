import React from 'react'
import "./searchItem.css"
const SearchItem = () => {
    return (
        <div className='search_item'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt="" className="search_item_img" />
            <div className="search_item_description">
                <h1 className="search_item_title">Tower Street Apartments</h1>
                <span className="search_item_distance">500m from center</span>
                <span className="search_item_taxi">Free airport taxi</span>
                <span className="search_item_subtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="search_item_feature">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="search_item_cancel">Free cancellation </span>
                <span className="search_item_cancel_subtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="search_item_detail">
                <div className="search_item_detail_rate">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="search_item_detail_text">
                    <span className="search_item_details_price">$112</span>
                    <span className="search_item_taxi">Includes taxes and fees</span>
                    <button className="search_item_cancel_btn">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
