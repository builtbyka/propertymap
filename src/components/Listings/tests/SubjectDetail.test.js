import React from 'react';
import { shallow } from 'enzyme';
import SubjectDetail from '../SubjectDetail';

import SubjectSummary from '../SubjectSummary';
import SubjectDescription from '../SubjectDescription';

describe('<SubjectDetail />', () => {
  it('renders without crashing', () => {
    const container = shallow(<SubjectDetail />);
    expect(container).toBeDefined();
  });

  it('renders a summary', () => {
    const container = shallow(<SubjectDetail />);
    expect(container.find(SubjectSummary)).toHaveLength(1);
  });

  it('renders an overview', () => {
    const container = shallow(<SubjectDetail />);
    expect(container.find(SubjectDescription)).toHaveLength(1);
  });
});
