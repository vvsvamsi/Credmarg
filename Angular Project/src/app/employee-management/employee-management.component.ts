import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  employee = {
    name: '',
    designation: '',
    ctc: '',
    email: ''
  };
  employees :any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      this.employees.push(data);
      this.employee = { name: '', designation: '', ctc: '', email: '' };
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });

  }
}