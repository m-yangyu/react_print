import React from 'react';
import ReactPrint from '../src/index.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// it('renders ReactPrint', () => {
//     const tree = renderer
//       .create(<ReactPrint><button>测试</button></ReactPrint>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
// });

describe('test props', () => {
    const wrapper = Enzyme.mount(<ReactPrint target="ref"><button>测试</button></ReactPrint>)
    console.log(wrapper);
    test('props', () => {
        expect(wrapper.props().target).toBe('ref');
    })
});
