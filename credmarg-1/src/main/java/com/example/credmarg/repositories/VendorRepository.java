package com.example.credmarg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.credmarg.entity.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
}

