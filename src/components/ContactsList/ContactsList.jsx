import ContactCategories from '../ContactCategories/ContactCategories'
import ContactRows from '../ContactRows/ContactRows'
import './ContactsList.css'

const ContactsList = (props) => {
    const {
        contacts,
        dealsObject,
        tagsObject,
        contactTagsObject,
        geoIpsObject,
        geoAddressesObject
    } = props

    return (
        <div className="contacts-list">
            <ContactCategories />
            <ContactRows
                contacts={contacts}
                dealsObject={dealsObject}
                tagsObject={tagsObject}
                contactTagsObject={contactTagsObject}
                geoIpsObject={geoIpsObject}
                geoAddressesObject={geoAddressesObject}
            />
        </div>
    )
}

export default ContactsList