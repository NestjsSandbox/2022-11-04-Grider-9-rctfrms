import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //!Causes error in input-component ts and html files and also in card-form-component ts file
  //!@Input()   control: FormControl;
  
  //!Causes error in input-component html file and also in card-form-component html file
  // @Input() control: FormControl = new FormControl();

  //? Does not cause an error but BAD-PRACTICE Typescript
  //? Only when I use the 'any' type then no errors
  //todo Need to find a solution to use TS correct without above error cases
  @Input() control: any;

  constructor() { }

  ngOnInit(): void {
  }

}