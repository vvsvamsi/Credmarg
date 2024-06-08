package com.example.credmarg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.credmarg.entity.Email;
import com.example.credmarg.repositories.EmailRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EmailService {
    @Autowired
    private EmailRepository emailRepository;

    public Email sendEmail(Email email) {
        email.setTimestamp(LocalDateTime.now());
        // Mock sending email
        System.out.println("Sending email to " + email.getRecipient() + " with message: " + email.getMessage());
        return emailRepository.save(email);
    }

    public List<Email> getAllSentEmails() {
        return emailRepository.findAll();
    }
}