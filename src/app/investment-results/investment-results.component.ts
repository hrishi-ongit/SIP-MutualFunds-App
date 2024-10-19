import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IinvestmentResult } from '../investment.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent implements OnInit {
  // results = input()//signal
// @Input() results?: {
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested: number,
// }[];

// @Input() results?: IinvestmentResult[]

public results = input<IinvestmentResult[]>()

ngOnInit() : void {
}
}
