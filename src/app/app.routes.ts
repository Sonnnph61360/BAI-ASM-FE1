import { Routes } from '@angular/router';
import { Clientlayout } from './layout/clientlayout/clientlayout';
import { Adminlayout } from './layout/adminlayout/adminlayout';
import { Homepage } from './pages/homepage/homepage';
import { Category } from './pages/category/category';
import { Detail } from './pages/detail/detail';
import { Products } from './pages/admin/products/products';
import { Productadd } from './pages/admin/productadd/productadd';
import { Productedit } from './pages/admin/productedit/productedit';
import { Cart } from './pages/cart/cart';
import { CategoryList } from './pages/admin/category-list/category-list';
import { Categoryadd } from './pages/admin/categoryadd/categoryadd';
import { Categoryedit } from './pages/admin/categoryedit/categoryedit';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Homepage},
        {path:'category',component:Category},
        {path:'detail',component:Detail},
        {path:'cart',component:Cart}
    ]},
    {path:'admin',component:Adminlayout,children:[
        {path:'products',component:Products},
        {path:'products/add',component:Productadd},
        { path: 'productedit/:id', component: Productedit },
        { path: 'category', component: CategoryList },
        { path: 'categoryadd', component: Categoryadd },
        { path: 'categoryedit/:id', component: Categoryedit },
    ]},
// { path: 'categoryadd', component: Categoryadd },
// { path: 'categoryedit/:id', component: Categoryedit },
];
