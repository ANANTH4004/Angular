import { Directive } from '@angular/core';
import { NG_VALIDATORS ,FormControl, Validators , ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appErrors]',
  providers:[{provide:NG_VALIDATORS , useExisting:ErrorsDirective , multi:true}]
})
export class ErrorsDirective implements Validators {

  constructor() { }
  validate(c:FormControl):any{
    const Email = c.value;
    var reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    const isValid = reg.test(Email);
    const message = {
      'Email':{
        'message': 'Enter a Valid Email Address'
    }
  };
  return isValid ? null:message;
  }
}
