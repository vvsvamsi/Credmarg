package com.example.credmarg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.credmarg.entity.Email;
import com.example.credmarg.services.EmailService;

import java.util.List;

@RestController
@RequestMapping("/api/emails")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public Email sendEmail(@RequestBody Email email) {
        return emailService.sendEmail(email);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<Email> getAllSentEmails() {
        return emailService.getAllSentEmails();
    }
}
