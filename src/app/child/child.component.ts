import { Component, Input  ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input() message !:string;
  
  constructor() {
  }
  mystyles = {
    'backgroud-color': "Lime",
    'font-size':"20px" ,
    'color':"red"
  }
  //Created a Custom Event using Event Emiiter Class.
  @Output()  notify : EventEmitter<string> = new EventEmitter<string>();


  //Create a new function to trigger the custom event 
  trigger(data : string){
    this.notify.emit(data);
  }

}
