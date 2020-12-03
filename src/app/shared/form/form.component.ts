import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  @Input() formData: any;
  @Output() submit = new EventEmitter();

  form: FormGroup;
  submitted: boolean;

  constructor() { }

  ngOnInit() {
    const formGroup = {};

    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl("");
    });

    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
    this.submit.emit(this.form.value);
  }


  cancel() {
    this.submit.emit(null);
  }
}
