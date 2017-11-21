import { Component } from '@angular/core';

export class Item{
car: string;
customs: boolean;
price: number;
model:string;
owner:string;
color:string;
constructor(car: string, price: number,model:string,
    owner:string,color:string) {
this.color=color;
   this.owner=owner;
   this.model=model;
   this.car = car;
   this.price = price;
   this.customs = false;
}
}

@Component({
    moduleId: module.id,
    selector:'app',
    templateUrl:`app.component.html`,
    styleUrls:['app.component.css']

})
export class AppComponent { 
items: Item[] = 
[
   { car: "Audi", customs: true, price: 3000,model:"tt",owner:" Brian ",color:"black" },
   { car: "Lada", customs: false, price: 500,model:"Kalina",owner:"Oleg",color:"red" },
   { car: "BMW", customs: false, price: 22000,model:"x5",owner:"Ron",color:"orang" },
   { car: "Lexus", customs: false, price:51000,model:"LX470",owner:"Max",color:"blue"}
];
addItem( car: string, price: number, model: string,owner:string,color:string): void {
    if(color==null || color==undefined ||color.trim()=="")
    {
    alert("Введите цвет машины");
    return;}
    if(owner==null || owner==undefined ||owner.trim()=="")
    {
        
        alert("Введите владельца машины");
        
        return ;}
   if(car==null || car==undefined || car.trim()=="")
   {
    alert("Введите марку машины");
    return;}
       
   if(price==null || price==undefined)
   {
    alert("Введите цену машины");
    return;}
  if(model==null || model==undefined || model.trim()=="")
  {
    alert("Введите модель машины");
    return;}
   this.items.push ( new Item (car, price,model, owner,color));
}
}