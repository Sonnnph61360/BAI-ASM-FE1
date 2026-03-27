import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../interface/product';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  route = inject(ActivatedRoute)
  products:IProduct[] = []
  changdt = inject(ChangeDetectorRef)
  async ngOnInit(){
    // const keyword = this.route.snapshot.queryParams['keyword']
    // console.log(keyword);
    const res = await fetch(`http://localhost:3000/products`)
    this.products = await res.json()
    this.changdt.markForCheck()
  }
}
