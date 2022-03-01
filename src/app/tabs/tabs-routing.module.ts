import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../screens/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../screens/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../screens/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../screens/category/category.module').then(m => m.CategoryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
