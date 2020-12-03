import { Component, OnInit, Input } from '@angular/core';
import { ItemForm } from '../../../model/item';
import { BusinessForm } from '../../../model/business';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {


  @Input("data") data;
  sharedData: any = {
    total: 0,
    title: "",
    type: ""
  };
  itemForm: any = ItemForm;
  formData: any;



  constructor() { }

  ngOnInit(): void {
  }


  openModal(id) {
    this.sharedData.type = id;
    switch (id) {
      case "name":
        this.formData = BusinessForm;
        this.sharedData.title = "Create New Party";

        break;
      case "item":
        this.formData = ItemForm;
        this.sharedData.title = "Create New Item";

        break;
    }
    this.sharedData.showModal = true;
  }


  closed(event) {
    console.log("Closed", this.data)
    this.sharedData.showModal = false;
    if (event) {
      switch (this.sharedData.type) {
        case "name":
          this.data.party = event;
          break;
        case "item":
          this.data.items.push(event);
          this.calculateTotal();
          break;
      }

    }
  }


  removeItem(index) {
    console.log('index', index);
    this.data.items.splice(index, 1);
    this.calculateTotal();
  }


  calculateTotal() {
    this.data.total = 0;
    this.data.items.forEach(element => {
      this.data.total += element.quantity * element.ratePerItem;
    });
  }


  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.data.logo = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
