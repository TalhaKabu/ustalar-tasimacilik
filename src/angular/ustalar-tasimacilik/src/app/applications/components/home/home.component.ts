import { Component, HostBinding, Input } from '@angular/core';
import { ItemDto } from './home';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  transportationType: string = 'Evden Eve';
  transportationTypes: string[] = [
    'Evden Eve',
    'Şehirler Arası',
    'Şehir İçi',
    'Parçalı',
    'Asansörlü',
  ];
  lastTransportationTypeId: number = 0;
  private intervalId: any;

  @HostBinding('style.--windowWidth')
  @Input()
  windowWidth: string = '0 px';

  servicesItems: ItemDto[] = [];
  skillItems: ItemDto[] = [];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (window.innerWidth > 1920) this.windowWidth = 1920 + 'px';
    else this.windowWidth = window.innerWidth + 'px';

    this.intervalId = setInterval(() => {
      if (this.lastTransportationTypeId + 1 < this.transportationTypes.length) {
        this.lastTransportationTypeId++;
      } else {
        this.lastTransportationTypeId = 0;
      }
      this.transportationType =
        this.transportationTypes[this.lastTransportationTypeId];
    }, 3000);

    this.matIconRegistry.addSvgIcon(
      'truck-icon',
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
        image: 'truck-icon',
      },
      {
        header: 'EŞYA PAKETLEME',
        body: 'Kaliteli malzemelerle her eşyaya uygun ambalaj ve paketleme',
        image: 'package_icon',
      },
      {
        header: 'TECRÜBELİ PERSONEL',
        body: 'Uzun yıllar nakliye sektöründe hizmet etmiş profesyonel ekip',
        image: 'persons_icon',
      },
      {
        header: 'SİGORTALI TAŞIMACILIK',
        body: 'Taşıma işlemi öncesinde tüm eşyalarınız sigortalanarak taşınır',
        image: 'insurance_icon',
      }
    );
  }
}
