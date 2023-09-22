import { NgModule } from '@angular/core';
import { ApplicationRoutingModule } from './application-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, ContactComponent],
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
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [],
})
export class ApplicationModule {}
