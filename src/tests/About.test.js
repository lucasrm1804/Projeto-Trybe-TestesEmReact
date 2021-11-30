import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <About.js />', () => {
  beforeEach(() => renderWithRouter(<About />));
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(h2).toBeInTheDocument();
  });

  it('Teste se a página contém as informações sobre a Pokédex', () => {
    const p = screen.getAllByText(/Pokémons/i);
    expect(p.length).toBe(2);
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
