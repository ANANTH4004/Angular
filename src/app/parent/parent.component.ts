import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

 passing !: string;
 received !: string
  constructor() {
   this.passing = 'Hello From parent';
  }
  changeData(data :string){
    //[(NgModel)] = "Passing";
    this.received = data ;
  }
  changeData1(data :string){
    //[(NgModel)] = "Passing";
    this.passing = data ;
  }

}
