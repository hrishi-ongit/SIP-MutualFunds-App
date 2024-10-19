import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iinvestmentinput } from '../investment.interface';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // public initInvest: string = '0'; //Because value as user input is a number in string
  // public anualInvest: string = '0';
  // public expectRet: string = '5';
  // public duration: string = '10';

  //using signals, while using signals with ngModels, we need to use () ro read as ngModels automatically does it
  //however, to assig the signal value to other than ngModel, read it using parenthesis
  public initInvest = signal('0');
  public anualInvest = signal('0');
  public expectRet = signal('5');
  public duration  = signal('10');
  
  


  @Output() calculateData = new EventEmitter<Iinvestmentinput>();
  onSubmit(){
    this.calculateData.emit({
      initialInvestment: +this.initInvest(), 
      duration: +this.duration(), 
      expectedReturn: +this.expectRet(), 
      annualInvestment: +this.anualInvest()
    })
  }
}
