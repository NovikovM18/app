import { Component, Input, OnInit } from '@angular/core';
import { Rate } from '../Rate';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  @Input() rates!: Rate[];
  @Input() usd?: Rate;
  @Input() euro?: Rate;

  currencies: Rate[] = [];
  currencyA: Rate = {
    r030: 0,
    txt: '',
    rate: 0,
    cc: '',
    exchangedate: ''
  };
  currencyB: Rate = {
    r030: 0,
    txt: '',
    rate: 0,
    cc: '',
    exchangedate: ''
  };
  valueA: string = '';
  valueB: string = '';

  constructor() { }

  addHryvna() {
    this.currencies = [{
      r030:980,
      txt:"Українська гривня",
      rate:1,
      cc:"UAH",
      exchangedate:"this.rates[0].exchangedate",
    }, ...(this.currencies || [])];
  }
  
  setDemo() {
    this.currencyA = this.currencies[0];
    this.currencyB = this.currencies[26];
  }

  calcB() {
    this.valueB = (+this.valueA * this.currencyA.rate / this.currencyB.rate).toFixed(2) + '';
  }
  
  calcA() {
    this.valueA = (+this.valueB * this.currencyB.rate / this.currencyA.rate).toFixed(2) + '';
  }
  
  ngOnInit(): void {
  }

  ngOnChanges () {
    this.currencies = this.rates;
    this.addHryvna();
    this.setDemo();
  }
}
