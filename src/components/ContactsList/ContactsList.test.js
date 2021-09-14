import { shallow } from 'enzyme';
import ContactsList from '../ContactsList/ContactsList'
import ContactCategories from '../ContactCategories/ContactCategories'
import ContactRows from '../ContactRows/ContactRows'

describe('ContactsList', () => {
    it('renders ContactsList', () => {
        const wrapper = shallow(<ContactsList />);
        expect(wrapper).toMatchSnapshot();
    })

    it('renders ContactCategories', () => {
       const wrapper = shallow(<ContactsList />);
        expect(wrapper.find(ContactCategories).length).toEqual(1);
    })

    it('renders ContactRows', () => {
        const wrapper = shallow(<ContactsList />);
        expect(wrapper.find(ContactRows).length).toEqual(1);
    })
})