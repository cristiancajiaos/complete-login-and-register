import { Component, OnInit } from '@angular/core';
import { IconDefinition, faFont, faEnvelope, faKey, faSignInAlt, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSmall: boolean;

  form: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  faSignInAlt: IconDefinition;
  faFont: IconDefinition;
  faEnvelope: IconDefinition;
  faKey: IconDefinition;
  faUndo: IconDefinition;

  constructor(
    private breakpoints: BreakpointObserver
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });

    this.breakpoints.observe(['(max-width:767px)']).subscribe(result => {
      this.isSmall = result.breakpoints['(max-width:767px)'];
    });

    this.faSignInAlt = faSignInAlt;
    this.faFont = faFont;
    this.faEnvelope = faEnvelope;
    this.faKey = faKey;
    this.faUndo = faUndo;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
