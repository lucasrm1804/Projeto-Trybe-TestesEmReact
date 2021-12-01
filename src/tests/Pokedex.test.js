import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Pokedex from '../components/Pokedex';
import pokemons from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ {
      4: false,
      10: false,
      23: false,
      25: false,
      65: false,
      78: false,
      143: false,
      148: false,
      151: false,
    } }
  />));

  it('este se página contém um heading h2 com o texto Encountered pokémons', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista ', () => {
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(button).toBeDefined();

    pokemons.forEach((pokemon) => {
      const card = screen.getByText(pokemon.name);
      expect(card).toBeDefined();
      userEvent.click(button);
    });
  });

  it('Teste se é mostrado apenas um Pokémon por vez', () => {
    const img = screen.getAllByRole('img');
    expect(img.length).toBe(1);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const numberBtn = 7;
    expect(typeButtons).toHaveLength(numberBtn);

    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    typeButtons.forEach((button, index) => {
      expect(button).toBeDefined();
      expect(button).toHaveTextContent(types[index]);
    });

    const buttonFire = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(buttonFire);
    const pokemonsFire = screen.getAllByText('Fire');
    pokemonsFire.forEach((pokemon) => expect(pokemon).toBeDefined());
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro,', () => {
    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeDefined();

    userEvent.click(buttonAll);
    const buttonNext = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonNext).not.toBeDisabled();
  });
});
