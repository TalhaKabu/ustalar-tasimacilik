import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  @HostBinding('style.--fixedWhatsappDisplay')
  @Input()
  fixedWhatsappDisplay: string = 'inline-block';

  @HostBinding('style.--toolbarHeight')
  @Input()
  toolbarHeight: string = '70px';

  @HostBinding('style.--windowHeight')
  @Input()
  windowHeight: string = '0px';

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight + 'px';
  }

  onOpenedChange() {
    this.fixedWhatsappDisplay = this.sidebarVisible
      ? 'none'
      : 'inline-block';
  }
}
