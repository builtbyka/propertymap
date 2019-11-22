import React from 'react';
import { shallow } from 'enzyme';
import SubjectSummary from '../SubjectSummary';

describe('<SubjectSummary />', () => {
  it('renders without crashing', () => {
    const container = shallow(<SubjectSummary />);
    expect(container).toBeDefined();
  });
});
