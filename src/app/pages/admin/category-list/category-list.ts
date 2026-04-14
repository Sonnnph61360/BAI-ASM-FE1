import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.html',
})
export class CategoryList implements OnInit {
  categories: any[] = [];
  http = inject(HttpClient);
  message = inject(NzMessageService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.http.get<any[]>('http://localhost:3000/categories').subscribe({
      next: (data) => {
        this.categories = data.filter(c => c.name && c.name.trim() !== "");
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error(err);
        this.message.error("Không thể tải danh sách danh mục!");
      }
    });
  }

  handleDelete(id: string | number) {
    if (confirm('Bạn chắc muốn xóa danh mục này không?')) {
      this.http.delete(`http://localhost:3000/categories/${id}`).subscribe(() => {
        this.message.success('Đã xóa thành công!');
        this.loadCategories();
      });
    }
  }
}