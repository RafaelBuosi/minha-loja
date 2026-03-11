import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-formulario-produto',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './formulario-produto.html',
  styles: `.caro { color: #dc3545; font-weight: bold; }`
})
export class FormularioProduto {
  produtoNome = '';
  produtoPreco = 0;
  listaProdutos = signal<any[]>([]);

  salvar() {
    this.listaProdutos.update(l => [...l, { 
      id: Date.now(), 
      nome: this.produtoNome, 
      preco: this.produtoPreco 
    }]);
    this.produtoNome = '';
    this.produtoPreco = 0;
  }
}