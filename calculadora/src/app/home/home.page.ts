import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display : string = "0"; //display variable
  past_display: string = ''; //variable to store the past operation
  result : number = 0; //variable to store the last result
  clear_value : string = 'AC'; //variable to store the value of the clear button

  constructor() {}

  //function to handle the button click
  
  AC(): void{
    if(this.display === '0') this.clear_value = 'AC';
    else this.clear_value = 'C';
  }

  //function to clear values, it is function overloading :)
  pressButton(buttonValue: string): void{
    
    if(buttonValue === 'changeSign' && this.display !== '0'){
      this.display = (parseFloat(this.display) * -1).toString();
      //adds a space to the past display
      this.past_display = (parseFloat(this.past_display) * -1).toString();
      this.past_display += ' ';

    }else if(buttonValue === 'clear'){

      this.result = 0;
      this.display = "0";
      this.past_display = this.result.toString();
      this.clear_value = 'AC';

    }else if( buttonValue === '%'){

      this.display = (parseFloat(this.display) / 100).toString();
      // this parses a string to a float and then divides it by 100(math definition), then it parses it to a string again

    }else if(buttonValue === '='){

      if(this.past_display[0] === '*' || this.past_display[0] === '/') this.result = 0;
      else this.result = eval(this.past_display); //stores the result of the past display
      this.display = this.result.toString(); //displays the result
      this.past_display = this.result.toString(); //past display is now the result

    }else{

      if(this.display === '0' && (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/')) {
        //display is 0 and the button value is an operator, so the display is 0 but the past is the operator
        this.display = '0'; 
        this.past_display = buttonValue//if the display is 0, erase it from the display and add the button value

      }else if(this.display === '0'){
        //the display is 0 and the new is a number, so the display is 0 but the past is the operator
        this.display = buttonValue; 
        this.past_display = buttonValue; 

      }else{
        //if the display is not 0(not new), add the button value to the display
        if(buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') this.display = this.display; //dont add the operator to the display
        else if(this.past_display[this.past_display.length -1] === '+' || this.past_display[this.past_display.length -1] === '-' || this.past_display[this.past_display.length -1] === '*' || this.past_display[this.past_display.length -1] === '/') this.display = buttonValue; //if the last character of the past display is an equal, the display is the button value
        else this.display += buttonValue;
        this.past_display += buttonValue;
      }
      
      if(this.past_display.length > 0){
        //if theres more than one character in the past display 
        let last = this.past_display[this.past_display.length -2]; //checks if the last character of the past display is an operator
        if((last === '+' || last === '-' || last === '*' || last === '/') && (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/')) {
          this.past_display = this.past_display.slice(0, -2); //if the last two characters are operators, remove them
          this.past_display += buttonValue; //add the new operator
        } 
      }
     
      this.AC();
      console.log("display: " + this.display);
      console.log("past display: " + this.past_display);
      console.log("button: " + buttonValue);
 
    }
  }
}
