import { shallow } from 'enzyme';
import FooterInfo from "../../../components/Bottom/FooterInfo";
describe('Pruebas en "FooterInfo"', () => {
    
    const wrapper = shallow(<FooterInfo/>);
    test('Debe de mostrar correctamente el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

});