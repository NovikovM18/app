import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from './Rate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public rates!: Rate[];
  public usd: Rate | undefined;
  public euro: Rate | undefined;
  public date: string = '';
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  
  ngOnInit(): void {
    this.httpClient.get<Rate[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .subscribe((arr) => {
      this.rates = arr;
      this.date = arr[0].exchangedate;
      this.usd = arr.find(el => el.cc === 'USD');
      this.euro = arr.find(el => el.cc === 'EUR');
    });
  };
}
