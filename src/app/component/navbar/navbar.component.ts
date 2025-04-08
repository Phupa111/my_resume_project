import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  renderer: any;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const header = this.el.nativeElement.querySelector('header');
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent scrolling when menu is open
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
