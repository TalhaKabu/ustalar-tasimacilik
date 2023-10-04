import { Component, HostBinding, Input } from '@angular/core';
import { ItemDto } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  servicesItems: ItemDto[] = [];
  skillItems: ItemDto[] = [];

  ngOnInit(): void {
    this.servicesItems.push({
      header: 'Evden Eve Nakliyat',
      body:
        'Firmamız Bursa evden eve nakliye sektörünün en çok tercih edilen ve' +
        'en güvenilen firmalarından bir tanesi olarak sizlere kusursuz taşıma' +
        'hizmetlerini en uygun fiyatlar ile sunmaktadır',
      image: '',
    });

    this.skillItems.push(
      {
        header: 'NAKLİYE ARAÇLARI',
        body: 'Özel tasarlanmış farklı boyutlarda taşıma araçlarımız',
        image: 'local_shipping',
      },
      {
        header: 'EŞYA PAKETLEME',
        body: 'Kaliteli malzemelerle her eşyaya uygun ambalaj ve paketleme',
        image: 'inventory_2',
      },
      {
        header: 'TECRÜBELİ PERSONEL',
        body: 'Kaliteli malzemelerle her eşyaya uygun ambalaj ve paketleme',
        image: 'groups',
      },
      {
        header: 'SİGORTALI TAŞIMACILIK',
        body: 'Kaliteli malzemelerle her eşyaya uygun ambalaj ve paketleme',
        image: 'admin_panel_settings',
      } 
    );
  }
}
