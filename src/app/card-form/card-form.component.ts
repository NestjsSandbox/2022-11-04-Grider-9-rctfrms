import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({

    cardName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
      Validators.pattern(/^[A-Za-z]+$/) //Only letters allowed
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      //All CC except AmericanExpress are 16 digit
      //So this will not support AmericanExpress
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    cardExpire: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0−2])\/\d{2}$/),
    ]),
    cardSecCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{3}$/),
    ]),
    
  });

  constructor() {
    console.log(this.cardForm.controls.cardName);
    //Another annotation for getting value of cardName FormControl object:
    // console.log(this.cardForm.get('cardName'));
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log('Form is now submitted');
  }


}
