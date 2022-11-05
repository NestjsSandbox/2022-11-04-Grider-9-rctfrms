import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //!Causes error in input-component.html file and also in card-form-component ts file
  //@Input()   mycontrol: FormControl | undefined;
  //! This causes same error in input.component.html file:
  // @Input() mycontrol?: FormControl;

  //! This causes the app to crash but no error indication in VSCode IDE
  //@Input () mycontrol!: FormControl;

  //!Causes error in input-component html file and also in card-form-component html file
  // @Input() mycontrol: FormControl = new FormControl();

 
  //todo This works but I need to understand if it is the Best-practice way for TS
  //todo Also need to understand why all the above alernatives cause errors.
  @Input()   mycontrol: FormControl | any;
  //The following also work but they dont seem best-practice because they dont use the FormControl type:
  //@Input() mycontrol!: any;
  //@Input() mycontrol: any;


  constructor() { }

  ngOnInit(): void {
  }

}