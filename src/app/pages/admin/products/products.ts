import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  route = inject(ActivatedRoute);
  http = inject(HttpClient); // Inject HttpClient để gọi API
  changdt = inject(ChangeDetectorRef);
  
  products: IProduct[] = [];

  async ngOnInit() {
    this.loadProducts();
  }
 loadProducts() {
  this.http.get<IProduct[]>('http://localhost:3000/products').subscribe((data) => {
    this.products = data;
    this.changdt.markForCheck();
  });
}

  handleDelete(id: string | number) {
  if (confirm('Bạn muốn xóa sản phẩm này?')) {
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter(item => item.id !== id);
        alert("Xóa thành công!");
      },
      error: (err) => console.error("Lỗi khi xóa:", err)
    });
  }
}
}