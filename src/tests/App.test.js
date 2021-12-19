import { shallow } from "enzyme";
import App from "../App";
describe('Pruebas en "App"', () => {
  const portfolioItems = [
    { id: "cabin", name: "Log Cabin" },
    { id: "cake", name: "Tasty Cake" },
  ];
  const wrapper = shallow(<App portfolioItems={portfolioItems} />);
  test("Debe de mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar todos los componentes asociados", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Menu").length).toBe(1);
    expect(wrapper.find("Portfolio").length).toBe(1);
    expect(wrapper.find("About").length).toBe(1);
    expect(wrapper.find("Contact").length).toBe(1);
    expect(wrapper.find("FooterInfo").length).toBe(1);
    expect(wrapper.find("Footer").length).toBe(1);
    expect(wrapper.find("Modal").length).toBe(2);
  });
});
