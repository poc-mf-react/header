import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu } from '../Menu';

const content = 'content';

describe('<Menu />', () => {
  it('renders component with content', () => {
    render(<Menu>{content}</Menu>);

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
