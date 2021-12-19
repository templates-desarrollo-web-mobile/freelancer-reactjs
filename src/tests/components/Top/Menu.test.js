import { shallow } from 'enzyme';
import Menu from "../../../components/Top/Menu/Menu";
describe('Pruebas en "Footer"', () => {
    
    const wrapper = shallow(<Menu/>);
    test('Debe de mostrar correctamente el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

});