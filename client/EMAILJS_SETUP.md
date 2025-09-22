# EmailJS Setup Guide for PYP Technology Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you're using pyptechnologypune@gmail.com)
4. Connect your Gmail account
5. Note down the **Service ID** (starts with "service_")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** `New Contact Form Submission - {{subject}}`

**Content:**
```
Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the PYP Technology contact form.
```

4. Save the template and note down the **Template ID** (starts with "template_")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Configuration
Replace the placeholder values in `client/src/config/emailjs.js`:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id', // Replace this
  TEMPLATE_ID: 'template_your_actual_template_id', // Replace this  
  PUBLIC_KEY: 'your_actual_public_key', // Replace this
  
  TO_EMAIL: 'pyptechnologypune@gmail.com',
  
  TEMPLATE_PARAMS: {
    from_name: 'from_name',
    from_email: 'from_email',
    subject: 'subject', 
    message: 'message',
    to_email: 'to_email'
  }
};
```

## Step 6: Test the Form
1. Build and deploy your application
2. Test the contact form
3. Check if emails are received at pyptechnologypune@gmail.com

## Troubleshooting
- Make sure all IDs are correct (no extra spaces)
- Check browser console for any errors
- Verify EmailJS service is active
- Ensure Gmail account is properly connected

## Security Note
The public key is safe to expose in frontend code. EmailJS handles security through their service.
