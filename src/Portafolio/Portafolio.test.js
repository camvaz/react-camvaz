import React from 'react';
import { render } from '@testing-library/react';
import Portafolio from './App';

test('renders learn react link', () => {
    const { getByText } = render(<Portafolio />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

