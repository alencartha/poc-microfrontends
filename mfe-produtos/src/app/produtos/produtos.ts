import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  standalone: true,
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.scss'],
  imports: [CommonModule],
})


export class Produtos {


  produtos = [
    {
      nome: 'Smartphone X1',
      descricao: 'Última geração com câmera tripla',
      preco: '2.499,99',
      imagem:
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      nome: 'Notebook Pro',
      descricao: '16GB RAM, SSD 512GB, Intel i7',
      preco: '4.599,99',
      imagem:
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      nome: 'Fones Bluetooth',
      descricao: 'Cancelamento de ruído premium',
      preco: '799,99',
      imagem:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
  ];
}
