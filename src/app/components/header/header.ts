import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuAbierto = signal(false);

  toggleMenu() {
    this.menuAbierto.update(abierto => !abierto);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}
