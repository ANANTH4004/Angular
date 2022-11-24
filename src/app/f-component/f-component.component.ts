import { Component } from '@angular/core';

@Component({
  selector: 'app-f-component',
  templateUrl: './f-component.component.html',
  styleUrls: ['./f-component.component.css']
})
export class FComponentComponent {
    name = 'Anand';
    hide:boolean = false;
    hideText(){
      this.hide = !this.hide;
    }
}
