import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { Iinvestmentinput, IinvestmentResult } from './investment.interface';
import { InvestmentService } from './shared/investment.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private _investmentService: InvestmentService){}
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
  public annualData: IinvestmentResult[] = [];
  //sigal :
  // public annualData = signal<IinvestmentResult[] | undefined>(undefined)

  calculateInvestmentResults(data: Iinvestmentinput): void {
    this.annualData = this._investmentService.calculateInvestmentResults(data);
  }
}
