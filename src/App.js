import { useState, useEffect } from 'react'
import ContactsList from './components/ContactsList/ContactsList'
import { formatObjectByIDKeys } from './utils/format'
import './App.css';

const App = () => {
  const [tagsObject, setTagsObject] = useState({})
  const [contactTagsObject, setContactTagsObject] = useState({})
  const [dealsObject, setDealsObject] = useState({})
  const [geoAddressesObject, setGeoAddressesObject] = useState({})
  const [geoIpsObject, setGeoIpsObject] = useState({})
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const requestOptions = {
        headers: {
          'Api-Token': 'bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0'
        }
      }
      const res = await fetch(
        'https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts?include=geoIps.geoAddress,contactTags.tag,deals', 
        requestOptions
      )
      const data = await res.json()
      console.log("DATA", data)  
      const { tags, contactTags, deals, geoAddresses, geoIps, contacts } = data

      //create object with tag IDs as keys and tag objects as values
      const tagsObj = formatObjectByIDKeys(tags)
      console.log("TAGS OBJ", tagsObj)
      setTagsObject(tagsObj)

      //create object with contact tag IDs as keys and contact tag objects as values
      const contactTagsObj = formatObjectByIDKeys(contactTags)
      console.log("CONTACTS TAG OBJ", contactTagsObj)
      setContactTagsObject(contactTagsObj)

      //create object with deal IDs as keys and deal objects as values
      const dealsObj = formatObjectByIDKeys(deals)
      console.log("DEALS obj", dealsObj)
      setDealsObject(dealsObj)
      
       //create object with geoAddress IDs as keys and geoAddress objects as values
       const geoAddressesObj = formatObjectByIDKeys(geoAddresses)
       console.log("GeoAddresses obj", geoAddressesObj)
       setGeoAddressesObject(geoAddressesObj)

      //create object with geoIps IDs as keys and geoIps objects as values
      const geoIpsObj = formatObjectByIDKeys(geoIps)
      console.log("geoIps OBJ", geoIpsObj)
      setGeoIpsObject(geoIpsObj)
    
      setContacts(contacts)
    } 
    getData()
  }, [])

  return (
    <div className="App">
      <ContactsList 
        contacts={contacts}
        dealsObject={dealsObject}
        tagsObject={tagsObject}
        contactTagsObject={contactTagsObject}
        geoIpsObject={geoIpsObject}
        geoAddressesObject={geoAddressesObject}
      />
    </div>
  );
}

export default App;
