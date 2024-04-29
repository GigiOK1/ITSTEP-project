import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutGodComponent } from './about-god/about-god.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { HowComponent } from './how/how.component';



export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        title:'Main'
    },
    {
        path:'about/:id',
        component:AboutGodComponent,
        title:'About Product'
    },
    {
        path:'cart/:id',
        component:CartComponent,
        title:'Cart'
    },
    {
      path: 'aboutus',
      component:AboutusComponent,
      title: 'About Us'
    },
    {
      path: 'products',
      component:ProductsComponent,
      title: 'Products'
    },
    {
      path: 'how',
      component:HowComponent,
      title: 'How its made'
    },
    {
      path: 'cart',
      component:CartComponent,
      title: 'Cart'
    },
    {
      path: 'contact',
      component:ContactComponent,
      title: 'Contact'
    },
    {
      path: 'signup',
      component:SignupComponent,
      title: 'Sign Up'
    },

];

export default routes
