import Footer from "../../../components/Bottom/Footer";
import { shallow } from 'enzyme';
describe('Pruebas en "Footer"', () => {
    
    const wrapper = shallow(<Footer/>);
    test('Debe de mostrar correctamente el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Comprobar si texto del footer es el indicado', () => {
        const title = wrapper.find("small").text().trim();
        expect(title).toBe("Copyright © Your Website 2021");
    });

});