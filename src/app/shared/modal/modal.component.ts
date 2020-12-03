import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('content') content: any;
  @Output() valueChange = new EventEmitter();
  @Input("formData") formData: any;
  @Input("type") type: any;
  @Input("title") title: any;
  @ViewChild('openButton') openButton: ElementRef;
  @ViewChild('closeButton') closeButton: ElementRef;


  constructor() {

  }



  ngOnInit() {
    console.log("gerhe",this.type)
    document.getElementById("openModalButton").click();
  }



  onClose() {
    this.valueChange.emit(null);

  }


  submitData(event) {
    this.closeButton.nativeElement.click();
    this.valueChange.emit(event);
  }
}