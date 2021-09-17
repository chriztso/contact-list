import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './ContactCategories.css'

const ContactCategories = () => {
    return (
        <div className="contact-categories">
            <input type="checkbox" className="contact-categories__checkbox"></input>
            <span className="contact-categories__contact-title">Contact</span>
            <span className="contact-categories__value-title">
                Total Value
                <ArrowDropDownIcon />
            </span>
            <span className="contact-categories__location-title">Location</span>
            <span className="contact-categories__deals-title">Deals</span>
            <span className="contact-categories__tags-title">Tags</span>
            <MoreHorizIcon />
        </div>
    )
}

export default ContactCategories