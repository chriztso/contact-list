import { shallow } from 'enzyme';
import ContactRows from '../ContactRows/ContactRows'
import Contact from '../Contact/Contact'

describe('ContactRows', () => {
    it('renders ContactRows', () => {
        const contacts = []
        const dealsObject = {}
        const tagsObject = {}
        const contactTagsObject = {}
        const geoIpsObject = {}
        const geoAddressesObject = {}
        const wrapper = shallow(
            <ContactRows  
              contacts={contacts}
              dealsObject={dealsObject}
              tagsObject={tagsObject}
              contactTagsObject={contactTagsObject}
              geoIpsObject={geoIpsObject}
              geoAddressesObject={geoAddressesObject}
            />);
        expect(wrapper).toMatchSnapshot();
    })
    
})