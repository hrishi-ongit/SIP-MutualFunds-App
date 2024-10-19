import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { Iinvestmentinput, IinvestmentResult } from './investment.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SipMutualfundsApp';
  // public annualData: {}[] = [];
  // public annualData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];

  //normal :
  // public annualData: IinvestmentResult[] = [];
  //sigal :
  public annualData = signal<IinvestmentResult[] | undefined>(undefined)

  calculateInvestmentResults(data: Iinvestmentinput) {
    const annualData: IinvestmentResult[] = [];

    //javascript destructuring
    const {initialInvestment, duration, expectedReturn, annualInvestment} = data;

    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log('Apps data :', annualData);
    // this.annualData = annualData;
    this.annualData.set(annualData); //set signal
  }
}
