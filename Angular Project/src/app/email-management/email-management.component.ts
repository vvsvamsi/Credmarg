import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmailService } from '../Services/email.service';
import { VendorService } from '../Services/vendor.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-email-management',
  templateUrl: './email-management.component.html',
  styleUrls: ['./email-management.component.css']
})
export class EmailManagementComponent implements OnInit {
  email = {
    recipient: '',
    subject: 'Payment Notification',
    message: '',
    timestamp: ''
  };
  vendors : any;
  sentEmails : any;
  constructor(private emailService: EmailService, private vendorService: VendorService,   private router: Router) { 
    // Listen to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/emails') {
        this.resetEmailState();
      }
  });
}
  

  ngOnInit(): void {
    this.getVendors();
    this.getSentEmails();

  }


  sendEmail() {
    const selectedVendor = this.vendors.find((v:any) => v.email === this.email.recipient);
    this.email.message = `Sending payments to vendor ${selectedVendor.name} at upi ${selectedVendor.upi}`;
    this.emailService.sendEmail(this.email).subscribe(data => {

      this.sentEmails.push(data);
      this.resetEmailState();
     // this.email = { recipient: '', subject: 'Payment Notification', message: '', timestamp: '' };
    });
  }


  getVendors() {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
    });
  }

  getSentEmails() {
    this.emailService.getSentEmails().subscribe(data => {
      this.sentEmails = data;
    });
  }
  resetEmailState() {
    this.email = { recipient: '', subject: 'Payment Notification', message: '', timestamp: '' };
  }


}


