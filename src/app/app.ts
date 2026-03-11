import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CardProduto } from './components/card-produto/card-produto';
import { FormularioProduto } from './pages/formulario-produto/formulario-produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, 
    Footer, 
    CardProduto, 
    FormularioProduto
  ],
  template: `
    <app-header />
    
    <div class="container">
      <h2>Cadastro</h2>
      <app-formulario-produto />

      <hr>

      <h2>Vitrine (Exemplos de Cards)</h2>
      <app-card-produto 
        nome="Notebook Gamer" 
        [preco]="5500" 
        (comprar)="avisarCompra($event)" />

      <app-card-produto 
        nome="Mouse Sem Fio" 
        [preco]="150" 
        (comprar)="avisarCompra($event)" />

      <app-card-produto 
        nome="Monitor 4K" 
        [preco]="2200" 
        [disponivel]="false"
        (comprar)="avisarCompra($event)" />
    </div>

    <app-footer />
  `
})
export class AppComponent {
  avisarCompra(nome: string) {
    alert('Produto adicionado: ' + nome);
  }
}