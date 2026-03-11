import { Component, input, output, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card-produto.html'
})
export class CardProduto implements OnInit {
  nome = input.required<string>();
  preco = input<number>(0);
  disponivel = input<boolean>(true);
  comprar = output<string>();

  ngOnInit() {
    console.log('Card carregado: ' + this.nome());
  }
}