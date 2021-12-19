import { shallow } from 'enzyme';
import Master from "../../../components/Top/Master";
describe('Pruebas en "Master"', () => {
    
    const wrapper = shallow(<Master/>);
    test('Debe de mostrar correctamente el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

});