import { shallow } from 'enzyme';
import ContactCategories from '../ContactCategories/ContactCategories'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

describe('ContactCategories', () => {
    it('renders ContactCategories', () => {
        const wrapper = shallow(<ContactCategories />);
        expect(wrapper).toMatchSnapshot();
    })

    it('renders category names', () => {
       const wrapper = shallow(<ContactCategories />);
       expect(wrapper.find('.contact-categories__contact-title').text()).toEqual('Contact');
       expect(wrapper.find('.contact-categories__value-title').text()).toEqual('Total Value');
       expect(wrapper.find('.contact-categories__location-title').text()).toEqual('Location');
       expect(wrapper.find('.contact-categories__deals-title').text()).toEqual('Deals');
       expect(wrapper.find('.contact-categories__tags-title').text()).toEqual('Tags');
    })

    it('renders arrow down icon', () => {
       const wrapper = shallow(<ContactCategories />);
       expect(wrapper.find(ArrowDropDownIcon).length).toEqual(1);
    })

    it('renders three dots icon', () => {
        const wrapper = shallow(<ContactCategories />);
        expect(wrapper.find(MoreHorizIcon).length).toEqual(1);
     })
})