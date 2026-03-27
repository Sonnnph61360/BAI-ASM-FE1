import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { IPost } from '../../interface/post';

@Component({
  selector: 'app-numberitem',
  imports: [],
  templateUrl: './numberitem.html',
  styleUrl: './numberitem.css',
})
export class Numberitem {
  @Input() number:number =0
  post:IPost = {} as IPost
  // cdr = inject(ChangeDetectorRef)
  ngOnInit(){
    // console.log('Khi Init',this.number);
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.number}`)
    .then(res=>res.json()).then(data=>this.post=data)
  }
  ngOnChanges(){
    // console.log('Khi Thay đổi',this.number);
     fetch(`https://jsonplaceholder.typicode.com/posts/${this.number}`)
    .then(res=>res.json()).then(data=>this.post=data)
  }
}
