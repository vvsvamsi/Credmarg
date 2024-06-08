package com.example.credmarg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.credmarg.entity.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
