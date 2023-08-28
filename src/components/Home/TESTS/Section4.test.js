import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Section4 from '../Section4';

describe('Section4 component', () => {
  const mockPrograms = [
    {
      title: 'Program 1',
      image: 'path-to-image-1.png',
      details: 'Details about program 1...',
      link: '/program-1',
    },
    {
      title: 'Program 2',
      image: 'path-to-image-2.png',
      details: 'Details about program 2...',
      link: '/program-2',
    },
   
  ];

  const mockTitle = 'Featured Programs';
  const mockShowButton = true;

  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Section4 title={mockTitle} programs={mockPrograms} showButton={mockShowButton} />
      </MemoryRouter>
    );

    
    expect(screen.getByText(mockTitle)).toBeTruthy();
    
  });

  // Add more test cases as needed
});
