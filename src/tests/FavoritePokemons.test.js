import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibido na tela a mensagem "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);
    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    userEvent.click(favorite);
    const favoritedPokemons = screen.getByRole('link', { name: /Favorite/i });
    userEvent.click(favoritedPokemons);
    const pokemon = screen.getByText(/average/i);
    expect(pokemon).toBeInTheDocument();
  });
});
