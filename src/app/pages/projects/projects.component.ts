import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
project = {
  title: 'Hotels Management System',
  description: 'A full-featured hotel management system...',
  tech: 'Angular, TypeScript, SCSS, RxJS',
  github: 'https://github.com/YOUR_USERNAME/hotel-management-system',
  images: [
    '1.a.png',
    '1.c.png',
    '1.b.png'
  ]
};
project2 = {
  title: 'Hotels Management System',
  description: 'A full-featured hotel management system...',
  tech: 'Angular, TypeScript, SCSS, RxJS',
  github: 'https://github.com/YOUR_USERNAME/hotel-management-system',
  images: [
    '1.a.png',
    '1.c.png',
    '1.b.png'
  ]
};

currentImageIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }, 1000); // تغيير الصورة كل 3 ثواني
}

}
