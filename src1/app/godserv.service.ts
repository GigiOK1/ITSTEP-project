import { Injectable } from '@angular/core';
import { GodCard } from './god-card';


@Injectable({
  providedIn: 'root'
})
export class GodservService {


  // //  protected godList: GodCard[] = [
  //     {
  //      id: 1,
  //      imgSrc: '/assets/Images/Vanilla.png',
  //      desc: 'Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe. Vanilla ice cream, like other flavors of ice cream, was originally created by cooling a mixture made of cream, sugar, and vanilla above a container of ice and salt.',
  //      name: 'Vanilla Ice Cream',
  //      price: '3.00$',
  //      category: "ice cream",
  //    },
  //    {
  //      id: 2,
  //      imgSrc: '/assets/Images/Chocolate.png',
  //      name: 'Chocolate Ice Cream',
  //      desc: 'Chocolate ice cream is ice cream with natural or artificial chocolate flavoring. One of the oldest flavors of ice creams, it is also one of the worlds most popular. While most often sold alone, it is also a base for many other flavors.',
  //      category: 'ice cream',
  //      price: "2.10$",
  //    },
  //    {
  //      id: 3,
  //      imgSrc: '/assets/Images/Caramel.png',
  //      name: 'Caramel Ice Cream',
  //      desc: 'sdfs',
  //      category: 'ice cream',
  //      price: "2.30$",
  //    },
  //    {
  //      id: 4,
  //      imgSrc: '/assets/Images/Bannana.png',
  //      name: 'Bannana Ice Cream',
  //      desc: 'A banana split is an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise, and served with ice-cream and sauce between the two pieces. There are many variations, but the classic banana split is made with three scoops of ice cream (one each of vanilla, chocolate, and strawberry)',
  //      category: 'ice cream',
  //      price: "2.40$",
  //    },
  //     {
  //       id: 5,
  //       imgSrc: '/assets/Images/Blueberry.png',
  //       name: 'Blueberry Ice Cream',
  //       desc: 'Blueberry Ice Cream is ice cream that can either be made by frozen or fresh blueberries.',
  //       category: 'ice cream',
  //       price: "2.50$",
  //       star: 5
  //     },

  //     {
  //       id: 6,
  //       imgSrc: '/assets/Images/Kiwi.png',
  //       desc: 'sdfs',
  //       name: 'Kiwi Ice Cream',
  //       category: 'ice cream',
  //       price: "2.30$",
  //       star: 5
  //     },
  //     {
  //       id: 7,
  //       imgSrc: '/assets/Images/raspberry.png',
  //       name: 'Raspberry Ice Cream',
  //       desc: 'sdfs',
  //       category: 'ice cream',
  //       price: "3.00$",
  //       star: 5
  //     },
  //     {
  //       id: 8,
  //       imgSrc: '/assets/Images/Oreo.png',
  //       name: 'Oreo Ice Cream',
  //       desc: 'sdfs',
  //       category: 'ice cream',
  //       price: "2.70$",
  //       star: 5
  //     },
  //     {
  //       id: 9,
  //       imgSrc: '/assets/Images/Twix.png',
  //       name: 'Twix Ice Cream',
  //       desc: 'sdfs',
  //       category: 'ice cream',
  //       price: "2.60$",
  //       star: 5
  //     },
  //     {
  //       id: 10,
  //       imgSrc: '/assets/Images/Strawberry.png',
  //       name: 'Strawberry Ice Cream',
  //       desc: 'sdfs',
  //       category: 'ice cream',
  //       price: "2.80$",
  //       star: 5
  //     },
  //     {
  //       id: 11,
  //       imgSrc: '/assets/Images/Snickers.png',
  //       name: 'Snickers Ice Cream',
  //       desc: 'sdfs',
  //       category: 'ice cream',
  //       price: "2.90$",
  //       star: 5
  //     },
  //     {
  //       id: 12,
  //       imgSrc: '/assets/Images/Nuts.png',
  //       name: 'Nuts Ice Cream',
  //       desc: 'sdfs',
  //       category: 'ice cream',
  //       price: "3.00$",
  //       star: 5
  //     },
  //     {
  //       id: 13,
  //       imgSrc: '/assets/Images/ChocolateSmt.png',
  //       name: 'Chocolate Smoothie',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "5.00$",
  //       star: 5
  //     },
  //     {
  //       id: 14,
  //       imgSrc: '/assets/Images/Blueberrymilk.png',
  //       name: 'Blueberry Milkshake',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "6.00$",
  //       star: 5
  //     },
  //     {
  //       id: 15,
  //       imgSrc: '/assets/Images/Caramelmilk.png',
  //       name: 'Caramel Milkshake',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "5.50$",
  //       star: 5
  //     },
  //     {
  //       id: 16,
  //       imgSrc: '/assets/Images/Raspberrymilk.png',
  //       name: 'Raspberry Milkshake',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "6.50$",
  //       star: 5
  //     },
  //     {
  //       id: 17,
  //       imgSrc: '/assets/Images/Strawberrymilk.png',
  //       name: 'Strawberry Milkshake',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "5.80$",
  //       star: 5
  //     },
  //     {
  //       id: 18,
  //       imgSrc: '/assets/Images/Vanillamilk.png',
  //       name: 'Vanilla Milkshake',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "6.30$",
  //       star: 5
  //     },
  //     {
  //       id: 19,
  //       imgSrc: '/assets/Images/ColdCoffe.png',
  //       name: 'Cold Coffe',
  //       desc: 'sdfs',
  //       category: 'ice coffee',
  //       price: "6.70$",
  //       star: 5
  //     },
  //     {
  //       id: 20,
  //       imgSrc: '/assets/Images/Chocolatemilk.png',
  //       name: 'Chocolate Milkshake',
  //       desc: 'sdfs',
  //       category: 'milk shake',
  //       price: "7.00$",
  //       star: 5
  //     },
  //]

  url = 'https://6623c7d43e17a3ac8470359d.mockapi.io/ice'


  constructor() { }


  async getAllGods() : Promise< GodCard[]> {
    const response  = await fetch(this.url)
    return await response.json() ?? []
  }


 async getAllGodsById(id:Number): Promise< GodCard | undefined >{

    const response = await fetch(`${this.url}/${id}`)

    return await response.json() ?? {}
  }
}
