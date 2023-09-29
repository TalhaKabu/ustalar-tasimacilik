import { Component, HostBinding, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;

  @HostBinding('style.--toolbarHeight')
  @Input()
  toolbarHeight: string = '70px';

  @HostBinding('style.--windowHeight')
  @Input()
  windowHeight: string = '0px';

  ngOnInit(): void {
    this.windowHeight = window.innerHeight + 'px';
    this.items = [
      {
        label: 'Anasayfa',
        icon: 'pi pi-home',
      },
      {
        label: 'Hakkımızda',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'İletişim',
        icon: 'pi pi-phone',
      },
    ];
  }
}
