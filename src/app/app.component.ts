import { Component } from '@angular/core';
import { routes } from "./rountingData";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  root = routes[0];
  yes(val: any):void{
    console.log(val);
    
    this.root = routes[val];
  }
  no(val: any):void{
    console.log(val);
    this.root = routes[val];
  }
}
