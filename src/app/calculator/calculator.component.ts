import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  currentNumber: string = '0';
  firstOperand: number;
  operator: string;
  waitForSecondNumber = false;

  constructor() {}

  ngOnInit(): void {}

  public getNumber(v: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = v)
        : (this.currentNumber += v);
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  public getOperation(op: string) {
    if (this.firstOperand === undefined) {
      this.firstOperand = +this.currentNumber;
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, this.currentNumber);
      this.currentNumber = result.toString();
      this.firstOperand = +result;
    }
    this.firstOperand = +this.currentNumber;

    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = +'';
    this.operator = '';
    this.waitForSecondNumber = false;
  }

  private doCalculation(op: string, secondOp: any) {
    switch (op) {
      case '+':
        return this.firstOperand + +secondOp;
      case '-':
        return this.firstOperand - +secondOp;
      case '*':
        return this.firstOperand * +secondOp;
      case '/':
        return this.firstOperand / +secondOp;
      case '=':
        return secondOp;
    }
  }
}
