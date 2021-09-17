import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
    it('renders App', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toMatchSnapshot();
    })
})
