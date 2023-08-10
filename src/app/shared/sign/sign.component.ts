import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ecommerce-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SignComponent {
  onLogin(form: NgForm) {
  }

  onRegister(form: NgForm) {

  }
}
