export interface Iinvestmentinput{
    initialInvestment:number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment:number
}

export interface IinvestmentResult {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}