import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(value: string | null, options: any) {

    if (!value){
        super.setValue('', { ...options, emitModelToViewChange: true });  
        return;
    }


    //The regex means: Return true if NOT a digit OR slash "/"
    if (value.match(/[^0-9|\/]/gi)) {
      
    //The following means "Revert the input the the original value"
    // The original value is the value that existed before the user started typing.
    //* The 'this.value' :
    //*  (1) It is the value stored in FormControl, it is not typed by the user.
    //*  (2) Before the user started typing there was a value in the field, this is it.
    //* 
    //*  The 'value' witout the 'this.':
    //*   (1) It is the argument for the function setValue().
    //*   (2) It is the user's typed input.
    // This original-value is the current-value, it is stored in the FormControl class.
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
    //Because we set emitModelToViewChange: true, then at every keystroke the value 
    // displayed in the input field will revert to the original value.
      return;
    }

    if (value.length > 5 ) { 
        super.setValue(this.value, { ...options, emitModelToViewChange: true });
        return;
    }

    //This condition is for case where user cannot bacspace to delet the '/'
    //? for some reason I can delete the bacspace so i dont see a need for this condition:
    // if (value.length === 2 && this.value.length === 4) { 
    //     //FYI: Here we set the 'value' value and not the 'this.value' of FormControl
    //     super.setValue(value, { ...options, emitModelToViewChange: true });
    //     return;
    // }


    super.setValue(value, { ...options, emitModelToViewChange: true });

    //Example of how setValue  with property emitModelToViewChange works
    // super.setValue(value + '*', { ...options, emitModelToViewChange: true });
    // Meaning of emitModelToViewChange true / false:
    // Default emitModelToViewChange: false this causes behavior
    // where the value of 'value' is set only after the user pauses typing
    // so if user types 'hello' then value will be 'hello*'.
    //
    // Menaing of emitModelToViewChange: true causes this behavior:
    // The value of 'value' is set after each keystroke being typed
    // so if user types 'hello' then value will be 'h*e*l*l*o*'
  }
}
