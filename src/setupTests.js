import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})


global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;