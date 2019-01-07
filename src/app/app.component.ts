import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Tutorial Angular 7 #3: Enrutamiento';
  isActive:boolean=true;

  toggle():void{
    this.isActive=!this.isActive;
  }
}
