import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  data: any = {
    items: [],
    party: {},
    total : 0
  };
  sharedData: any = {};

  constructor() { }

  ngOnInit(): void {
  }


  saveInvoice() {
    console.log("Gregrg")
    this.sharedData.showModal = true;
    this.data = {
      items: [],
      party: {},
      total : 0
    };
  }


  checkValid() {
    if (Object.keys(this.data.party).length > 0 && this.data.items.length > 0 && this.data.invoiceDate && this.data.invoiceNo) {
      return false;
    } else {
      return true;
    }
  }

  closed() {
    this.sharedData.showModal = false;

  }

}
