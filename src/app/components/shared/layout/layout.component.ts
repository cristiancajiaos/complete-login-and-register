import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IconDefinition, faSignInAlt, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isSmall: boolean;

  faSignInAlt: IconDefinition;
  faUserPlus: IconDefinition;
  faBars: IconDefinition;

  constructor(
    private breakpoints: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpoints.observe(['(max-width:767px)']).subscribe(result => {
      this.isSmall = result.breakpoints['(max-width:767px)'];
    });

    this.faSignInAlt = faSignInAlt;
    this.faUserPlus = faUserPlus;
    this.faBars = faBars;
  }

}
