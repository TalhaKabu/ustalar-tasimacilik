import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  servicesItems: { id: number; name: string; icon: string }[] = [];

  howItems: { icon: string; name: string; body: string }[] = [];

  ngOnInit(): void {
    this.servicesItems.push(
      {
        id: 0,
        name: 'Evden Eve Nakliyat',
        icon: 'home_icon',
      },
      {
        id: 1,
        name: 'Ofiş Taşımacılığı',
        icon: 'office_icon',
      },
      {
        id: 2,
        name: 'Parça Eşya Taşımacılığı',
        icon: 'furniture_icon',
      },
      {
        id: 3,
        name: 'Araç nakliyatı',
        icon: 'motor_icon',
      },
      {
        id: 4,
        name: 'Eşya Depolama',
        icon: 'warehouse_icon',
      },
    );

    this.howItems.push(
      {
        icon: 'package_filled_icon',
        name: 'Eşya Paketleme',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor nulla nulla, facilisis facilisis sapien convallis ut. Sed a facilisis dolor. Etiam rhoncus scelerisque justo eu convallis. Mauris eget ultrices quam. Maecenas magna velit, semper sit amet est nec, elementum varius lectus.',
      },
      {
        icon: 'worker_filled_icon',
        name: 'Tecrübeli Personel',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor nulla nulla, facilisis facilisis sapien convallis ut. Sed a facilisis dolor. Etiam rhoncus scelerisque justo eu convallis. Mauris eget ultrices quam. Maecenas magna velit, semper sit amet est nec, elementum varius lectus.',
      },
      {
        icon: 'truck_filled_icon',
        name: 'Nakliye Araçları',
        body: 'Sağlam, kaliteli nakliye araçları',
      },
      {
        icon: 'insurance_filled_icon',
        name: 'Sigortalı Nakliyat',
        body: 'Taşıma işlemi öncesinde tüm eşyalarınız sigortalanarak taşınır',
      }
    );
  }

  onMouseEnter(id: number) {
    var service = this.servicesItems.find((x) => x.id == id);
    switch (id) {
      case 0: {
        service!.icon = 'home_filled_icon';
        break;
      }
      case 1: {
        service!.icon = 'office_filled_icon';
        break;
      }
      case 2: {
        service!.icon = 'furniture_filled_icon';
        break;
      }
      case 3: {
        service!.icon = 'motor_filled_icon';
        break;
      }
      case 4: {
        service!.icon = 'warehouse_filled_icon';
        break;
      }
      default: {
        break;
      }
    }
  }

  onMouseLeave(id: number) {
    var service = this.servicesItems.find((x) => x.id == id);
    switch (id) {
      case 0: {
        service!.icon = 'home_icon';
        break;
      }
      case 1: {
        service!.icon = 'office_icon';
        break;
      }
      case 2: {
        service!.icon = 'furniture_icon';
        break;
      }
      case 3: {
        service!.icon = 'motor_icon';
        break;
      }
      case 4: {
        service!.icon = 'warehouse_icon';
        break;
      }
      default: {
        break;
      }
    }
  }
}
