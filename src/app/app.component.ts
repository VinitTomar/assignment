import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * This class represents the first component which will be bootstraped by AppModule.
 * This is the parent component of every other component.
 */
export class AppComponent {
  showmenu = false;

  /**
   * This function will be used to toggle menu bar when the screen is small.
   * No parameter is passed and no value is returned from this function.
   */
  toggleShowMenu(){
    this.showmenu = !this.showmenu;
  }
}
