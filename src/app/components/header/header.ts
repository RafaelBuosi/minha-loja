import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html'
})
export class Header {
  estaEscuro = input<boolean>(false);
  trocarTema = output<void>();
}