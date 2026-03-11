import { Component, signal, effect } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormularioProduto } from '../formulario-produto/formulario-produto';
import { CardProduto } from '../../components/card-produto/card-produto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, FormularioProduto, CardProduto],
  templateUrl: './home.html'
})
export class Home {
  darkMode = signal(false);

  constructor() {
    effect(() => {
      const theme = this.darkMode() ? 'dark' : 'light';
      document.documentElement.setAttribute('data-bs-theme', theme);
    });
  }

  toggleTheme() {
    this.darkMode.update(v => !v);
  }
}