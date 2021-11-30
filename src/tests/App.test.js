import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('1. Teste o componente <App.js />', () => {
  renderWithRouter(<App />);
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeDefined();

    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeDefined();

    const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favorite).toBeDefined();
  });

  it('Teste de rota Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  it('Teste de rota About', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  it('Teste de rota Favorite Pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favorite);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Teste de rota notFound', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/Lucas');
    const h2 = screen.getByRole('heading', {
      name: 'Page requested not found Crying emoji',
    });
    expect(h2).toBeInTheDocument();
  });
});
