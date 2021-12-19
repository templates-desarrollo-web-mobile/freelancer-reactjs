// import "@testing-library/jest-dom/extend-expect";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

// Configurando Enzyme para el testing
Enzyme.configure({ adapter: new Adapter() });
// Extensión de Enzyme para obtener los snapshots
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));