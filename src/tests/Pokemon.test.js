import React from 'react';
import { screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <Pokemon.js />', () => {
  beforeEach(() => renderWithRouter(<Pokemon
    pokemon={ pokemons[0] }
    isFavorite
    showDetailsLink
  />));

  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent(/pikachu/i);
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/Electric/i);
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/i);
    const pokemonImage = screen.getByAltText('Pikachu sprite');
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Teste se o card do Pokémon indicado na Pokédex', () => {
    const moreDetails = screen.getByText(/More Details/i);
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    const markedFavorite = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(markedFavorite).toHaveAttribute('src', '/star-icon.svg');
  });
});
