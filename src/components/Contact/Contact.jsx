import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './Contact.css'

const Contact = (props) => {
    const {
        name,
        initials,
        contactTagsStr,
        numberOfDeals,
        dealsTotalValue,
        geoAddressStr
    } = props

    const [showButton, setShowButton] = useState(false)

    return (
        <div className="contact" 
          onMouseEnter={() => {setShowButton(true)}}
          onMouseLeave={() => {setShowButton(false)}}
        >
            <input type="checkbox" className="contact__checkbox"></input>
            <div className="contact__name">
                <div className="contact__initials">
                    {initials}
                </div>
                <div>{name}</div>
            </div>
            <span className="contact__value">${dealsTotalValue}</span>
            <span className="contact__location">{geoAddressStr}</span>
            <span className="contact__deals">{numberOfDeals}</span>
            <span className="contact__tags">{contactTagsStr}</span>
            {showButton && <div className="contact__email-button">
              <div className="contact__email">Email</div>
              <div className="contact__down-arrow"><ArrowDropDownIcon/></div>
            </div>}
        </div>
    )
}

export default Contact