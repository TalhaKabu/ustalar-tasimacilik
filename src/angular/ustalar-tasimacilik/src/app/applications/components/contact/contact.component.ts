import { Time } from '@angular/common';
import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  //#region Props
  inputs: any[] = [];

  pages: any[] = [];
  @HostBinding('style.--page')
  @Input()
  page: number = 3;

  @HostBinding('style.--pagesLenght')
  @Input()
  pagesLength: number = 1;

  selectedTransportType: number = 1;
  transportTypeOptions: any[] = [];

  selectedPropertyType: number = 1;
  propertyTypeOptions: any[] = [];

  selectedNumberOfRoom: number = 1;
  numberOfRooms: any[] = [];

  selectedNumberOfFloor: number = 1;
  numberOfFloors: any[] = [];

  details: string = '';
  remaining: number = 250;
  total: number = 250;

  toAdress: string = '';
  toCity: string = '';
  fromAdress: string = '';
  fromCity: string = '';

  date: string = new Date().toISOString();
  time: string = new Date().getHours() + ':' + new Date().getMinutes();

  doc: Document = document;
  //#endregion

  ngOnInit(): void {
    this.pages.push(
      {
        name: 'Kişisel Bilgiler *',
        icon: 'person-filled-icon',
        page: 1,
      },
      {
        name: 'Taşıma Türü Seçimi *',
        icon: 'truck-filled-icon',
        page: 2,
      },
      {
        name: 'Taşıma Adres Bilgileri *',
        icon: 'adress-filled-icon',
        page: 3,
      },
      {
        name: 'Taşıma Zaman Bilgileri *',
        icon: 'date-filled-icon',
        page: 4,
      }
    );

    this.pagesLength = this.pages.length;

    this.inputs.push(
      {
        labelName: 'Ad *',
        inputValue: '',
        placeHolder: 'Adınızı giriniz',
        icon: '',
        type: 'text',
        isFocused: false,
      },
      {
        labelName: 'Soyad *',
        inputValue: '',
        placeHolder: 'Soyadınızı giriniz',
        icon: '',
        type: 'text',
        isFocused: false,
      },
      {
        labelName: 'Email *',
        inputValue: '',
        placeHolder: 'Mail adresinizi giriniz',
        icon: 'mail-filled-icon',
        type: 'email',
        isFocused: false,
      },
      {
        labelName: 'Telefon *',
        inputValue: '',
        placeHolder: 'Telefon numaranızı giriniz',
        icon: 'phone-filled-icon',
        type: 'tel',
        isFocused: false,
      }
    );

    this.transportTypeOptions.push(
      {
        value: 1,
        labelName: 'Evden Eve Nakliyat',
      },
      {
        value: 2,
        labelName: 'Ofis Taşıma',
      },
      {
        value: 3,
        labelName: 'Parça Eşya Taşıma',
      },
      {
        value: 4,
        labelName: 'Diğer',
      }
    );

    this.propertyTypeOptions.push(
      {
        value: 1,
        name: 'Lütfen Seçin',
      },
      {
        value: 2,
        name: 'Apartman',
      },
      {
        value: 3,
        name: 'Müstakil',
      },
      {
        value: 4,
        name: 'Villa',
      }
    );

    this.numberOfRooms.push(
      {
        value: 1,
        name: 'Lütfen Seçin',
      },
      {
        value: 2,
        name: '1 + 0 (Stüdyo)',
      },
      {
        value: 3,
        name: '1 + 1',
      },
      {
        value: 4,
        name: '2 + 1',
      },
      {
        value: 5,
        name: '3 + 1',
      },
      {
        value: 6,
        name: '4 + 1',
      },
      {
        value: 7,
        name: '5 + 1 >',
      }
    );

    this.numberOfFloors.push(
      {
        value: 1,
        name: 'Lütfen Seçin',
      },
      {
        value: 2,
        name: '-1',
      },
      {
        value: 3,
        name: 'Zemin',
      },
      {
        value: 4,
        name: '1',
      },
      {
        value: 5,
        name: '2',
      },
      {
        value: 6,
        name: '3',
      },
      {
        value: 7,
        name: '4',
      },
      {
        value: 8,
        name: '5 >',
      }
    );
  }

  onInputFocus(labelName: string) {
    this.inputs.find((x) => x.labelName == labelName).isFocused = true;
  }

  onInputBlur(labelName: string) {
    if (!this.inputs.find((x) => x.labelName == labelName).inputValue) {
      this.inputs.find((x) => x.labelName == labelName).isFocused = false;
    }
  }

  changePage(value: boolean) {
    if (value) {
      this.page++;
    } else {
      this.page--;
    }
  }
}
