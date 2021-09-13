import './ContactsList.css'
import ContactCategories from '../ContactCategories/ContactCategories'
import ContactRows from '../ContactRows/ContactRows'

const ContactsList = (props) => {
    const {
        contacts,
        dealObjects,
        tagObjects,
        contactTagObjects,
        geoIpsObjects,
        geoAddressObjects
    } = props

    return (
        <div className="contacts-list">
            <ContactCategories />
            <ContactRows
                contacts={contacts}
                dealObjects={dealObjects}
                tagObjects={tagObjects}
                contactTagObjects={contactTagObjects}
                geoIpsObjects={geoIpsObjects}
                geoAddressObjects={geoAddressObjects}
            />
        </div>
    )
}

export default ContactsList