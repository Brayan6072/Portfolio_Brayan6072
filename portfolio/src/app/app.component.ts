import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from "./components/navbar/navbar.component";
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  @ViewChild('menuLinks') menu!: ElementRef;
  @ViewChild('mobileIcon') icon!: ElementRef;
  title = 'portfolio';


  toggleMenu(){
    this.menu.nativeElement.classList.toggle('open');
    this.icon.nativeElement.classList.toggle('open');
  }
}
