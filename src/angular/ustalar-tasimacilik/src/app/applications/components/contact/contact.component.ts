import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  inputs: any[] = [];

  @HostBinding('style.--page')
  @Input()
  page: number = 5;

  ngOnInit(): void {
    this.inputs.push(
      {
        labelName: 'Ad',
        inputValue: '',
        placeHolder: 'Adınızı giriniz',
        icon: '',
        type: 'text',
        isFocused: false,
      },
      {
        labelName: 'Soyad',
        inputValue: '',
        placeHolder: 'Soyadınızı giriniz',
        icon: '',
        type: 'text',
        isFocused: false,
      },
      {
        labelName: 'Email',
        inputValue: '',
        placeHolder: 'Mail adresinizi giriniz',
        icon: 'mail-filled-icon',
        type: 'email',
        isFocused: false,
      },
      {
        labelName: 'Telefon',
        inputValue: '',
        placeHolder: 'Telefon numaranızı giriniz',
        icon: 'phone-filled-icon',
        type: 'tel',
        isFocused: false,
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
}
