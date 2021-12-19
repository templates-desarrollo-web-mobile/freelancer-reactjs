import Contact from "../../../components/Bottom/Contact";
import { shallow } from 'enzyme';
describe('Pruebas en "Contact"', () => {
    
    const wrapper = shallow(<Contact/>);
    test('Debe de mostrar correctamente el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Comprobar si el título es el correcto', () => {
        const title = wrapper.find("h2").text().trim();
        expect(title).toBe("Contact Me");
    });

    test('Comprobar si la fuente de iconos es "fas fa-star"', () => {
        const iconSelect = wrapper.find("i").props().className;
        expect(iconSelect).toBe("fas fa-star");
    });

    test('Comprobar las propiedades de input "name" si son correctas', () => {
        const nameInputValue = wrapper.find("#name");
        const nameInputValueProps = nameInputValue.props();
        expect(nameInputValueProps.placeholder).toBe("Enter your name...");
        expect(nameInputValueProps.type).toBe("text");
        expect(nameInputValueProps.className).toBe("form-control");
    });
    

    /*test('Comprobar si propiedades de imagen son correctas', () => {
        
        const imgData = wrapper.find("img").props();

        expect(imgData.src).toBe(img.url);
        expect(imgData.alt).toBe(img.title);
    });

    test('Comprobar si está añadiendo correctamente clase "animate__fadeIn"', () => {
        
        const divClassName = wrapper.find("div").props().className;
        expect(divClassName.includes('animate__fadeIn')).toBe(true);
    
    });*/
});