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
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [NavbarComponent],
  providers: [DatePipe],
  bootstrap: [],
})
export class ApplicationModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    //#region Home
    this.matIconRegistry.addSvgIcon(
      'home_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/home.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'home_filled_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/home-filled.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'building_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/building.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'building_filled_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/building-filled.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'furniture_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/furniture.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'furniture_filled_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/furniture-filled.svg'
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

    //#region Contacts
    this.matIconRegistry.addSvgIcon(
      'person-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/person-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'mail-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/mail-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'phone-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/phone-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'truck-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/truck-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'left-arrow-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/left-arrow-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'right-arrow-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/right-arrow-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'adress-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/adress-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'map-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/map-filled-icon.svg'
      )
    );

    // this.matIconRegistry.addSvgIcon(
    //   'exit-filled-icon',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     'assets/svgs/exit-filled-icon.svg'
    //   )
    // );

    // this.matIconRegistry.addSvgIcon(
    //   'enter-filled-icon',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     'assets/svgs/enter-filled-icon.svg'
    //   )
    // );

    this.matIconRegistry.addSvgIcon(
      'date-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/date-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'time-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/time-filled-icon.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'approval-filled-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/approval-filled-icon.svg'
      )
    );
    //#endregion
  }
}
