// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Get these from https://www.emailjs.com/
  SERVICE_ID: 'service_your_service_id', // Replace with your service ID
  TEMPLATE_ID: 'template_your_template_id', // Replace with your template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your public key
  
  // Email settings
  TO_EMAIL: 'pyptechnologypune@gmail.com',
  
  // Template parameters mapping
  TEMPLATE_PARAMS: {
    from_name: 'from_name',
    from_email: 'from_email', 
    subject: 'subject',
    message: 'message',
    to_email: 'to_email'
  }
};

// EmailJS template example:
/*
Subject: {{subject}}
From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from the PYP Technology contact form.
*/
