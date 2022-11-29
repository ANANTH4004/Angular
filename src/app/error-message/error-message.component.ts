import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

   static readonly errorMessage={
    "required" :()=> "This is a Required Field - Anand",
    'minLength':(param:any) => "Minimum required" + param,
    'Email' : (param:any) => param.message 
  };
  @Input()  control!: AbstractControlDirective | AbstractControl;

  showErrors():boolean {
    return  Boolean(this.control && this.control.errors && (this.control.dirty || this.control.touched));
  }
  errors() :string[]  {
    return Object.keys(this.control.errors).map(field => this.getMessage(field , this.control.errors[field]));
  }
  private getMessage(type:any, param:any){
    return ErrorMessageComponent.errorMessage[type as keyof typeof ErrorMessageComponent.errorMessage](param);
  }
}
