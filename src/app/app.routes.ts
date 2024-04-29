import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PacksComponent } from './packs/packs.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { AboutPackComponent } from './about-pack/about-pack.component';
import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowseComponent } from './browse/browse.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'about/:id',
    component: AboutCardComponent,
    title: 'Product',
  },
  {
    path: 'packs/:id',
    component: AboutPackComponent,
    title: 'packs',
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path:'browse',
    component:BrowseComponent,
  },
  {
    path:'checkout',
    component:CheckoutComponent,
  }
];
