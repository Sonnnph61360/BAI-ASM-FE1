import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = [
    { id: 1, name: 'Syltherine', price: 250, image: 'https://picsum.photos/300?1' },
    { id: 2, name: 'Leviosa', price: 300, image: 'https://picsum.photos/300?2' },
    { id: 3, name: 'Lolito', price: 150, image: 'https://picsum.photos/300?3' },
    { id: 4, name: 'Respira', price: 500, image: 'https://picsum.photos/300?4' },
  ];

  getAll() { return this.products; }
  getById(id: number) { return this.products.find(p => p.id == id); }

  addProduct(product: any) { this.products.push(product); }
  updateProduct(id: number, updated: any) {
    const index = this.products.findIndex(p => p.id === id);
    if(index !== -1) this.products[index] = updated;
  }
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}