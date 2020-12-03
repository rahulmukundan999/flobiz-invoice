import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {


  @Input("data") data;


  constructor() { }

  ngOnInit(): void {
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
