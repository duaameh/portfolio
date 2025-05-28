import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
projects = [
  {
    title: 'Hotels Management System',
    description: 'A full-featured hotel management system...',
    tech: 'Angular, TypeScript, SCSS, HTML',
    github: 'https://github.com/yousefshatnawi/hottel-managment-system-.git',
    Demo: 'https://lnkd.in/dwz6pF4j',
    images: ['1.a.jpg','1.c.jpg','1.b.jpg','1.d.jpg','1.e.jpg','1.e.jpg','1.2.jpg','1.9.jpg'],
    currentImageIndex: 0
  },
  {
    title: 'Managment System Websit  ',
    description: 'A web-based application developed using Angular that...',
    tech: 'Angular, TypeScript, SCSS, HTML',
    github: 'https://github.com/yousefshatnawi/managmentsystem10.git',
    Demo: 'https://duaameh.github.io/Management-System/',
    images: ['project02.jpg', 'project03.jpg', 'project04.jpg', 'project05.jpg'],
    currentImageIndex: 0
  },
  {
    title: 'TO DO LIST ',
    description: 'An Angular-based task management application that includes a note section ',
    tech: 'Angular, TypeScript, SCSS, HTML',
    github: 'https://github.com/duaameh/to-do-list',
    Demo: 'https://duaameh.github.io/to-do-list/',
    images: ['3.a.jpg', '3.b.jpg', '3.c.jpg'],
    currentImageIndex: 0
  }
  ,
  {
    title: 'HereToYou E-comerce Website (Full stack Web App)',
    description: 'online gifting platform, which is meant to solve the problem of how to choose the right gift.. ',
    tech: 'HTML , CSS , JavaScript ,ASP.NET Core, ',
    github: 'https://github.com/duaameh/HereToYouProject',
    Demo: '',
    images: ['4.a.jpg', '4.b.jpg', '4.c.jpg', '4.d.jpg'],
    currentImageIndex: 0
  }
];

currentImageIndex = 0;

ngOnInit() {
  this.projects.forEach((project, index) => {
    setInterval(() => {
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
    }, 2000);
  });
}


}
