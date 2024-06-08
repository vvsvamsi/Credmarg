import { Component, OnInit } from '@angular/core';
import { VendorService } from '../Services/vendor.service';
@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})
export class VendorManagementComponent implements OnInit {
  vendor = {
    name: '',
    email: '',
    upi: ''
  };
  vendors :any;

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.getVendors();
  }

  addVendor() {
    this.vendorService.addVendor(this.vendor).subscribe(data => {
      this.vendors.push(data);
      this.vendor = { name: '', email: '', upi: '' };
    });
  }

  getVendors() {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
    });
  }

}
