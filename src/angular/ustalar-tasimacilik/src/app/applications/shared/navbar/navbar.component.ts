import { Component, Host, HostBinding, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Register the WhatsApp icon
    this.matIconRegistry.addSvgIcon(
      'whatsapp-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/whatsapp.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'instagram-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/instagram.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'facebook-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/facebook.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'fixed-whatsapp-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/fixed-whatsapp-icon.svg'
      )
    );
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
