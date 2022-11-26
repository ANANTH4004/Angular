import { Component ,ViewChild , ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

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
  @ViewChild('div1') domRef !: ElementRef;
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit Function');
   console.log(this.domRef.nativeElement);
   console.log(this.domRef.nativeElement.innerText);
   console.log(this.domRef.nativeElement.style);
   setTimeout(() => {
    this.domRef.nativeElement.innerText = "Text Changed after 7 sec";
   }, 7000);
   
  }
  // change Content using Element Ref
  changeContent(){
    this.domRef.nativeElement.innerText = "Text Changed after button click";
    console.log(this.domRef.nativeElement.innerText)
    this.domRef.nativeElement.style.color = "green";
  }

}
