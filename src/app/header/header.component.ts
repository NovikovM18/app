import { Component, Input, OnInit, Output } from '@angular/core';
import { Rate } from '../Rate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() usd?: Rate;
  @Input() euro?: Rate;
  
  constructor() { }
  
  setUsd() {
    console.log('qwe');
    
  }

  ngOnInit(): void {
  }
}
