import { NgModule } from '@angular/core';
import { ApplicationRoutingModule } from './application-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    ApplicationRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [],
})
export class ApplicationModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {

    //#region Home
    this.matIconRegistry.addSvgIcon(
      'truck_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/truck_icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'package_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/package_icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'persons_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/persons_icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'insurance_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/insurance_icon.svg'
      )
    );
    //#endregion

    //#region navbar
    this.matIconRegistry.addSvgIcon(
      'whatsapp_colored_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/whatsapp_colored_icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'instagram_colored_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/instagram_colored_icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'facebook_colored_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/facebook_colored_icon.svg'
      )
    );
    //#endregion

    this.matIconRegistry.addSvgIcon(
      'fixed_whatsapp_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/fixed_whatsapp_icon.svg'
      )
    );

    //#region Footer
    this.matIconRegistry.addSvgIcon(
      'whatsapp-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/whatsapp-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'instagram-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/instagram-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'facebook_outlined_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/facebook_outlined_icon.svg'
      )
    );
    //#endregion
  }
}
