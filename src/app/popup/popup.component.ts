import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  companyform = this.formBuilder.group({
    id: this.formBuilder.control({ value: '', disabled: true }),
    name: this.formBuilder.control('', Validators.required),
    empcount: this.formBuilder.control('', Validators.required),
    revenue: this.formBuilder.control('', Validators.required),
    address: this.formBuilder.control('', Validators.required),
    isactive: this.formBuilder.control(true)
  });

}
