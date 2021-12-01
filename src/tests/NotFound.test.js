import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  beforeEach(() => renderWithRouter(<NotFound />));
  it('Teste se página contém um heading h2 com o texto "Page requested not found 😭"',
    () => {
      const h2 = screen.getByRole('heading', {
        name: /Page requested not found crying emoji/i,
      });
      expect(h2).toBeInTheDocument();
    });

  it('Teste se página contém um heading h2 com o texto "Page requested not found 😭"',
    () => {
      const img = screen.getAllByRole('img');
      expect(img[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    });
});
