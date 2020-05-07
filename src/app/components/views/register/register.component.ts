import { Component, OnInit } from "@angular/core";
import {
  IconDefinition,
  faFont,
  faEnvelope,
  faKey,
  faSignInAlt,
  faUndo,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {

  isSmall: boolean;
  form: FormGroup;

  name  = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  faSignInAlt: IconDefinition;
  faFont: IconDefinition;
  faEnvelope: IconDefinition;
  faKey: IconDefinition;
  faUndo: IconDefinition;
  faUserPlus: IconDefinition;

  constructor(
    private breakpoints: BreakpointObserver
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: this.name,
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
    this.faUserPlus = faUserPlus;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
