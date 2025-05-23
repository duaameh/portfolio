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
  tech: 'Angular, TypeScript, SCSS, HTML',
  github: 'https://github.com/yousefshatnawi/hottel-managment-system-.git',
  Demo: 'https://lnkd.in/dwz6pF4j',
  images: [
    '1.a.png',
    '1.c.png',
    '1.b.png'
  ]
};

project2 = {
  title: 'MANAGEMENT SYSTEM WEBSITE ',
  description: 'A web-based application developed using Angular that...',
  tech: 'Angular, TypeScript, SCSS, HTML',
  github: 'https://github.com/yousefshatnawi/managmentsystem10.git',
  images: [
    'project02.jpg',
    'project03.jpg',
    'project04.jpg',
    'project05.jpg'
  ]
};

currentImageIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }, 2000); // تغيير الصورة كل 3 ثواني
}

}
