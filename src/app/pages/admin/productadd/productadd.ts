import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule, NzSelectModule, NzFormModule, NzInputModule, NzButtonModule, CommonModule],
  templateUrl: './productadd.html',
  styleUrl: './productadd.css',
})
export class Productadd implements OnInit {
  productform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1000)]),
    description: new FormControl(''),
    categoryId: new FormControl('', Validators.required)
  })
  http = inject(HttpClient);
  message = inject(NzMessageService);
  router = inject(Router);

  categories:any[] = [];

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/categories').subscribe(data => {
      this.categories = data.filter(c=>c.name !== "")
    })
  }
  onSubmit = () => {
    if (this.productform.valid) {
      const productdata = this.productform.value;

    this.http.post(`http://localhost:3000/products`, productdata).subscribe({
      next:(data)=>{
        this.message.success("Thêm sản phẩm thành công!");
          this.router.navigate(['/admin/products']);
      },
      error:(err)=>{
        console.error(err);
          this.message.error("Có lỗi xảy ra khi thêm mới");
      }
    });
    }
    else{
      this.message.warning("Vui lòng điền đầy đủ thông tin!");
    }
  }
}
