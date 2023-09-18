import { NgModule } from '@angular/core';
import { ApplicationRoutingModule } from './application-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent],
  imports: [
    ApplicationRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [],
})
export class ApplicationModule {}
