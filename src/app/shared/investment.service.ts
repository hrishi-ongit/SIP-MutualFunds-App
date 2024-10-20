import { Injectable } from '@angular/core';
import { Iinvestmentinput, IinvestmentResult } from '../investment.interface';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    // public annualData: IinvestmentResult[] = []
    
  calculateInvestmentResults(data: Iinvestmentinput): IinvestmentResult[] {
    const annualData: IinvestmentResult[] = [];

    //javascript destructuring
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;

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
    return annualData;
  }
}
