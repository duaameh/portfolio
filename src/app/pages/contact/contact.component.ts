import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
contact = {
    name: '',
    email: '',
    message: ''
}
successMessage = '';

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // هنا ممكن تضيف إرسال البيانات للسيرفر أو API
      console.log('Contact form submitted', this.contact);
      this.successMessage = 'Thank you for reaching out! I will get back to you soon.';
      this.contact = { name: '', email: '', message: '' }; // إعادة تعيين النموذج
    }
}
}