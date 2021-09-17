import { shallow } from 'enzyme';
import Contact from '../Contact/Contact'

describe('Contact', () => {
    const name = "John Smith"
    const initials = "JS"
    const contactTagsStr = "test"
    const numberOfDeals = "2"
    const dealsTotalValue = "100"
    const geoAddressStr = 'N/A'

    it('renders Contact', () => {
        const wrapper = shallow(
          <Contact 
            name={name}
            initials={initials}
            contactTagsStr={contactTagsStr}
            numberOfDeals={numberOfDeals}
            dealsTotalValue={dealsTotalValue}
            geoAddressStr={geoAddressStr}
          />);
        expect(wrapper).toMatchSnapshot();
    })

    it('renders checkbox', () => {
        const wrapper = shallow(
          <Contact 
            name={name}
            initials={initials}
            contactTagsStr={contactTagsStr}
            numberOfDeals={numberOfDeals}
            dealsTotalValue={dealsTotalValue}
            geoAddressStr={geoAddressStr}
          />);
        expect(wrapper.find('.contact__checkbox')).toHaveLength(1)
    } )

    it('renders initials', () => {
      const wrapper = shallow(
        <Contact 
          name={name}
          initials={initials}
          contactTagsStr={contactTagsStr}
          numberOfDeals={numberOfDeals}
          dealsTotalValue={dealsTotalValue}
          geoAddressStr={geoAddressStr}
        />);
      expect(wrapper.find('.contact__initials').text()).toEqual("JS")
    })

    it('renders value of deals', () => {
      const wrapper = shallow(
        <Contact 
          name={name}
          initials={initials}
          contactTagsStr={contactTagsStr}
          numberOfDeals={numberOfDeals}
          dealsTotalValue={dealsTotalValue}
          geoAddressStr={geoAddressStr}
        />);
      expect(wrapper.find('.contact__value').text()).toEqual("$100")
    })

    it('renders location', () => {
      const wrapper = shallow(
        <Contact 
          name={name}
          initials={initials}
          contactTagsStr={contactTagsStr}
          numberOfDeals={numberOfDeals}
          dealsTotalValue={dealsTotalValue}
          geoAddressStr={geoAddressStr}
        />);
      expect(wrapper.find('.contact__location').text()).toEqual("N/A")
    })

    it('renders number of deals', () => {
      const wrapper = shallow(
        <Contact 
          name={name}
          initials={initials}
          contactTagsStr={contactTagsStr}
          numberOfDeals={numberOfDeals}
          dealsTotalValue={dealsTotalValue}
          geoAddressStr={geoAddressStr}
        />);
      expect(wrapper.find('.contact__deals').text()).toEqual("2")
    })

    it('renders contact tags', () => {
      const wrapper = shallow(
        <Contact 
          name={name}
          initials={initials}
          contactTagsStr={contactTagsStr}
          numberOfDeals={numberOfDeals}
          dealsTotalValue={dealsTotalValue}
          geoAddressStr={geoAddressStr}
        />);
      expect(wrapper.find('.contact__tags').text()).toEqual("test")
    })
})