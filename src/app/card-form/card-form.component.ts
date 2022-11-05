import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({

    name1: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
      Validators.pattern(/^[A-Za-z]+$/) //Only letters allowed

    ])

  });

  constructor() {
    console.log(this.cardForm.controls.name1);
    //Another annotation for getting value of name1 FormControl object:
    // console.log(this.cardForm.get('name1'));
  }

  ngOnInit(): void {}


  public get nameControl(): AbstractControl | null {
    return this.cardForm.get('name1');
  }
}
