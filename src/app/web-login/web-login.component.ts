import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-web-login',
  templateUrl: './web-login.component.html',
  styleUrls: ['./web-login.component.scss']
})
export class WebLoginComponent implements OnInit {

  loginForm: FormGroup;
  toggle =true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  onSubmit(){

  }
  handleReset(){
    this.loginForm.reset();
  }
}
