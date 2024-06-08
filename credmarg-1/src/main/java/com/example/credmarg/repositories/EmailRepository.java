package com.example.credmarg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.credmarg.entity.Email;

@Repository
public interface EmailRepository extends JpaRepository<Email, Long> {
}
