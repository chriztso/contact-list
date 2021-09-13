import Contact from '../Contact/Contact'
import { getStateAbbreviation } from '../../utils/format'   

const ContactRows = ( props ) => {
    const {
        contacts,
        dealObjects,
        tagObjects,
        contactTagObjects,
        geoIpsObjects,
        geoAddressObjects
    } = props

    const getContactTags = (contactTags) => {
        let contactTagsArr = []
        //go through each contactTag ID in contact property array, 
        contactTags.forEach(contactTagID => {
            //access the object in contactTagObjects with contact tag ID
            const contactTagObject = contactTagObjects[contactTagID]
            //get tag ID from contactTag object 
            const tagId = contactTagObject["tag"]
            //access the object in tagObjects
            const tagObject = tagObjects[tagId]
            //get tag from tag object
            const tag = tagObject["tag"]
            //push to array
            contactTagsArr.push(tag)
        })
        console.log('CT ARR', contactTagsArr)
        //create string from contact tags array
        const contactTagsStr = contactTagsArr.join(', ')
        console.log("CT STR", contactTagsStr)
        return contactTagsStr
    }

    const getDealsTotalValue = (deals) => {
        let dealsTotalValue = 0
        //go through each deal ID in contact property array
        deals.forEach(dealID => {
            //access the deal object in dealObjects with each deal ID
            const dealObj = dealObjects[dealID]
            //get value of deal object and add to dealsTotalValue
            const { value } = dealObj
            dealsTotalValue += Number(value)
        })
        console.log("TOTAL VAL", dealsTotalValue)
        //format number with commas
        dealsTotalValue = dealsTotalValue.toLocaleString("en-US")
        return dealsTotalValue
    }

    const getLocation = (geoIps) => {
        //go through each geoIps ID 
        geoIps.forEach(geoIpsID => {
            //access geoIps object in geoIpsObjects with each geoIps ID
            const geoIpObject = geoIpsObjects[geoIpsID]
            //accesss the geoAddrID property in each object
            const geoAddrID = geoIpObject["geoaddrid"]
            //access geoAddr object in geoAddressObjects with geoAddr ID
            const geoAddressObject = geoAddressObjects[geoAddrID]
            //get city, state, country
            const country = geoAddressObject["country2"]
            const city = geoAddressObject["city"]
            const stateAbbreviation = getStateAbbreviation(geoAddressObject["state"])
            //concat into string
            const location = `${city}, ${stateAbbreviation}, ${country}`
            return location
        })
    }
    return (
        <div>
            {contacts.map((contact) => {
                const { firstName, lastName, geoIps, contactTags, deals } = contact
                console.log('___________________________________')
                const name = `${firstName} ${lastName}`
                const initials = `${firstName[0]}${lastName[0]}`
                console.log('NAME', name)

                const contactTagsStr = getContactTags(contactTags)

                const numberOfDeals = deals.length
                const dealsTotalValue = getDealsTotalValue(deals)
                
                let geoAddressStr = ""
                if(geoIps.length === 0){
                    geoAddressStr = 'N/A'
                } else {
                  geoAddressStr = getLocation(geoIps)
                  console.log('GA ARR', geoAddressStr)
                  console.log('___________________________________')
                }

                return (
                  <Contact 
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