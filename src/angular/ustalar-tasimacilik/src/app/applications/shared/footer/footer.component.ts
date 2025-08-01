import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear: number = 2023;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
