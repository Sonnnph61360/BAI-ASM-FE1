import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoryedit',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, CommonModule],
  templateUrl: './categoryedit.html',
  styleUrl: './categoryedit.css',
})
export class Categoryedit implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)])
  })
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);
  message = inject(NzMessageService);
  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.http.get<any>(`http://localhost:3000/categories/${this.id}`).subscribe({
      next:(data)=>{
        this.categoryForm.patchValue({
          name: data.name
        })
      },
      error:()=>{
        this.message.error("Không tìm thấy danh mục này!");
        this.router.navigate(['/admin/categories']);
      }
    })
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      this.http.put(`http://localhost:3000/categories/${this.id}`, this.categoryForm.value).subscribe({
        next: () => {
          this.message.success("Cập nhật danh mục mới thành công!");
          this.router.navigate(['/admin/category']);
        },
        error: (err) => {
          console.error(err);
          this.message.error("Cập nhật danh mục thất bại rồi");
        }
      });
    }
  }
}
