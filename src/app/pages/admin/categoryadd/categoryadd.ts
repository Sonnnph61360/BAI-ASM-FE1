import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-categoryadd',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule],
  templateUrl: './categoryadd.html',
  styleUrl: './categoryadd.css',
})
export class Categoryadd {
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  http = inject(HttpClient);
  router = inject(Router);
  message = inject(NzMessageService);
  onSubmit() {
    if (this.categoryForm.valid) {
      this.http.post('http://localhost:3000/categories', this.categoryForm.value).subscribe({
        next: () => {
          this.message.success("Thêm danh mục mới thành công!");
          this.router.navigate(['/admin/category']);
        },
        error: (err) => {
          console.error(err);
          this.message.error("Thêm thất bại rồi");
        }
      });
    } else {
      this.message.warning("Nhập tên danh mục ít nhất 2 ký tự nhé!");
    }
  }
}
