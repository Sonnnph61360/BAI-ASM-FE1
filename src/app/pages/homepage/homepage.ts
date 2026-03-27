import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  products = [
    { name: 'T-shirt with Tape Details', price: 120, rating: 4.5, image: 'images/Frame 32.png' },
    { name: 'Skinny Fit Jeans', price: 240, rating: 3.5, image: 'images/Frame 33.png' },
    { name: 'Checkered Shirt', price: 180, rating: 4.5, image: 'images/Frame 34.png' },
    { name: 'Sleeve Striped T-shirt', price: 130, rating: 4.5, image: 'images/Frame 38.png' }
  ];

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
}