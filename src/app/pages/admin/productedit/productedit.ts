import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productedit',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, NzSelectModule, CommonModule],
  templateUrl: './productedit.html',
  styleUrl: './productedit.css',
})
export class Productedit implements OnInit {
  productform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1000)]),
    categoryId: new FormControl('', Validators.required),
    description: new FormControl('')
  })
  message = inject(NzMessageService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  http = inject(HttpClient);

  id = this.route.snapshot.params['id'];
  categories:any[] = [];

  async ngOnInit(){
    this.http.get<any[]>('http://localhost:3000/categories').subscribe(data=>{
      this.categories = data;
    })
    this.http.get<any>(`http://localhost:3000/products/${this.id}`).subscribe({
      next:(data)=>{
        this.productform.patchValue({
          name: data.name,
          price: data.price,
          image: data.image,
          categoryId: data.categoryId,
          description: data.description
        })
      },
      error:(err)=>{
        this.message.error("Không tìm thấy sản phẩm này!");
        this.router.navigate(['/admin/products']);
      }
    })
  }
  onSubmit = () => {
    if (this.productform.valid) {
      const productdata = this.productform.value;
      this.http.put(`http://localhost:3000/products/${this.id}`, productdata).subscribe({
        next:(data)=>{
          this.message.success("Cập nhật sản phẩm thành công!");
          this.router.navigate(['/admin/products']);
        },
        error:(err)=>{
          this.message.error("Cập nhật thất bại, vui lòng thử lại!");
        }
      })
    }
  }
}
