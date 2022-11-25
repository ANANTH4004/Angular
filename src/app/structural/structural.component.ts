import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {

  people : any[];
 constructor(){
 this.people =[{
  'age':21,
  'name':"Anand"
 },{
  'age':22,
  'name':"Nithya"
 },{
  'age':23,
  'name':"Varun"
 },{
  'age':34,
  'name':"Samantha"
 },{
  'age':35,
  'name':"Kathija"
 },{
  'age':36,
  'name':"Bidhu"
 }]
 }
  addNew(){
    this.people.push({
      'name':"Kathi",
      'age':4
    })
  }
}
