import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Section5 from '../Section5';

describe('Section5 component', () => {
  const mockProps = {
    link: '/GET_INVOLVED/Volunteer',
    btn: 'VOLUNTEER',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Section5 {...mockProps} />
      </MemoryRouter>
    );

    const button = screen.getByText('VOLUNTEER');
    const paragraph = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const image = screen.getByAltText('round');

    expect(button).toBeTruthy(); 
    expect(paragraph).toBeTruthy(); 
    expect(image).toBeTruthy(); 
  });
});
