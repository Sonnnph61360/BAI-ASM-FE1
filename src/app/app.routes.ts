import { Routes } from '@angular/router';
import { Clientlayout } from './layout/clientlayout/clientlayout';
import { Adminlayout } from './layout/adminlayout/adminlayout';
import { Homepage } from './pages/homepage/homepage';
import { Category } from './pages/category/category';
import { Detail } from './pages/detail/detail';
import { Products } from './pages/admin/products/products';
import { Productadd } from './pages/admin/productadd/productadd';
import { Productedit } from './pages/admin/productedit/productedit';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Homepage},
        {path:'category',component:Category},
        {path:'detail',component:Detail}
    ]},
    {path:'admin',component:Adminlayout,children:[
        {path:'products',component:Products},
        {path:'products/add',component:Productadd},
        {path:'products/edit/:id',component:Productedit}
    ]}
];
