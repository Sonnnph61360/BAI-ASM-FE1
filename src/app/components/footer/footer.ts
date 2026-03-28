import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  footerSections = [
    {
      title: 'Company',
      links: ['About', 'Features', 'Works', 'Career']
    },
    {
      title: 'Help',
      links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']
    },
    {
      title: 'FAQ',
      links: ['Account', 'Manage Deliveries', 'Orders', 'Payments']
    },
    {
      title: 'Resources',
      links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']
    }
  ];

  payments = ['visa.png', 'mastercard.png', 'paypal.png', 'apple-pay.png', 'google-pay.png'];
}
