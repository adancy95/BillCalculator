class BillCalculator{

  constructor(billAmount, tipAmount, billTotal, tipPercent, amountOfPeople, totalPerPerson){
    this.billAmount = billAmount;
    this.tipAmount = tipAmount;
    this.billTotal = billTotal;
    this.tipPercent = tipPercent;
    this.amountOfPeople = amountOfPeople;
    this.totalPerPerson = totalPerPerson;
  }

  calculateBillTotal(){
    return this.billAmount + this.tipAmount;
  }

  calculateTipAmount(){
    return this.billAmount * (this.tipPercent * .01)
  }

  calculateTotalPerPerson(){
    return (this.billTotal/this.amountOfPeople)
  }

 

}

