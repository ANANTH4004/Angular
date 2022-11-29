import { Component , OnInit} from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators , NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-validation-demo',
  templateUrl: './custom-validation-demo.component.html',
  styleUrls: ['./custom-validation-demo.component.css']
})
export class CustomValidationDemoComponent implements OnInit{
  validationForm : FormGroup;
  constructor(private form : FormBuilder){
    this.validationForm = new FormGroup({
      "name" :  new FormControl(),
      "Email" : new FormControl(),
      "password" : new FormControl(),
      "Age" : new FormControl()
    });
  }

  register(validate : any){
    console.log("Registration was Successfull");
    console.log(validate.value);
    alert(`Hi ${validate.value.name} your email id ${validate.value['Email']} is valid`)
  }



  ngOnInit(): void {
   
  }

}
