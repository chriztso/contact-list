import Contact from '../Contact/Contact'
import { getStateAbbreviation } from '../../utils/format'   
import convertToUSD from '../../utils/convert'

const ContactRows = ( props ) => {
    const {
        contacts,
        dealsObject,
        tagsObject,
        contactTagsObject,
        geoIpsObject,
        geoAddressesObject
    } = props
    console.log("CONTACTS", contacts)
    const getContactTags = (contactTags) => {
        let contactTagsArr = []
        //go through each contactTag ID in contact property array, 
        contactTags.forEach(contactTagID => {
            //access the object in contactTagsObject with contact tag ID
            const contactTagObject = contactTagsObject[contactTagID]
            //get tag ID from contactTag object 
            const tagId = contactTagObject["tag"]
            //access the object in tagObjects
            const tagObject = tagsObject[tagId]
            //get tag from tag object
            const tag = tagObject["tag"]
            //push to array
            contactTagsArr.push(tag)
        })
        //create string from contact tags array
        const contactTagsStr = contactTagsArr.join(', ')
        return contactTagsStr
    }

    const getDealsTotalValue = (deals) => {
        let dealsTotalValueUSD = 0
        //go through each deal ID in contact property array
        deals.forEach(dealID => {
            //access the deal object in dealsObject with each deal ID
            const dealObj = dealsObject[dealID]
            //get value and currency of deal object and add to dealsTotalValue
            const { value, currency } = dealObj
            //convert to USD if currency is not USD
            if(currency !== "usd"){
              const valueInUSD = convertToUSD(currency, (Number(value)/100))
              dealsTotalValueUSD += valueInUSD
            } else {
              //add without conversion if in USD
              dealsTotalValueUSD += Math.round((Number(value)/100))
            }
        })
        //format number with commas
        dealsTotalValueUSD = dealsTotalValueUSD.toLocaleString("en-US")
        return dealsTotalValueUSD
    }

    const getLocation = (geoIps) => {
        let location = ''
        //go through each geoIps ID 
        geoIps.forEach(geoIpsID => {
            //access geoIps object in geoIpsObject with each geoIps ID
            const geoIpsObj = geoIpsObject[geoIpsID]
            //accesss the geoAddrID property in each object
            const geoAddrID = geoIpsObj["geoaddrid"]
            //access geoAddr object in geoAddressesObject with geoAddr ID
            const geoAddressObject = geoAddressesObject[geoAddrID]
            //get city, state, country
            const country = geoAddressObject["country2"]
            const city = geoAddressObject["city"]
            const stateAbbreviation = getStateAbbreviation(geoAddressObject["state"])
            location = `${city}, ${stateAbbreviation}, ${country}`
        })
        return location
    }

    return (
        <div className="contact-rows">
            {contacts.map((contact) => {
                const { id, firstName, lastName, geoIps, contactTags, deals } = contact
                const name = `${firstName} ${lastName}`
                const initials = `${firstName[0]}${lastName[0]}`
                const contactTagsStr = contactTags.length === 0 ? '': getContactTags(contactTags)
                const numberOfDeals = deals.length
                const dealsTotalValue = deals.length === 0 ? 0 : getDealsTotalValue(deals)
                const geoAddressStr = geoIps.length === 0 ? 'N/A' : getLocation(geoIps)

                return (
                  <Contact 
                      key={id}
                      name={name}
                      initials={initials}
                      contactTagsStr={contactTagsStr}
                      numberOfDeals={numberOfDeals}
                      dealsTotalValue={dealsTotalValue}
                      geoAddressStr={geoAddressStr}
                  />
                )
            })}
        </div>
    )
}

export default ContactRows