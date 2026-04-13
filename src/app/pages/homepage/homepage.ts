import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core'; // Thêm inject, OnInit
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { IProduct } from '../../interface/product'; // Đảm bảo đúng đường dẫn interface

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  http = inject(HttpClient);
  changdt = inject(ChangeDetectorRef);

  products: IProduct[] = [];

  topSelling = [
    { name: 'Vertical Striped Shirt', price: 212, rating: 5.0, image: 'images/Frame 32 (1).png' },
    { name: 'Courage Graphic T-shirt', price: 145, rating: 4.0, image: 'images/Frame 33 (1).png' },
    { name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3.0, image: 'images/Frame 34 (1).png' },
    { name: 'Faded Skinny Jeans', price: 210, rating: 4.5, image: 'images/Frame 38 (1).png' }
  ];

  categories = [
    { name: 'Casual', image: 'images/Frame 61.png', cols: 'md:col-span-1' },
    { name: 'Formal', image: 'images/Frame 62.png', cols: 'md:col-span-2' },
    { name: 'Party',  image: 'images/Frame 64.png',  cols: 'md:col-span-2' },
    { name: 'Gym',    image: 'images/Frame 63.png',    cols: 'md:col-span-1' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<IProduct[]>('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
      this.changdt.markForCheck(); 
    });
  }
}