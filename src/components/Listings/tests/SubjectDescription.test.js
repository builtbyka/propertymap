import React from 'react';
import { shallow } from 'enzyme';
import SubjectDescription from '../SubjectDescription';

describe('<SubjectDescription />', () => {
  const props = {
    description: 'Lorem ipsum',
  };

  it('renders without crashing', () => {
    const container = shallow(<SubjectDescription />);
    expect(container).toBeDefined();
  });

  it('renders an description', () => {
    const container = shallow(<SubjectDescription />);
    container.setProps(props);
    expect(
      container.find('p').first().text(),
    ).toEqual('Lorem ipsum');
  });

});
