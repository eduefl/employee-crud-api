import { Component } from '@angular/core';
import { SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,Event, NavigationEnd, NavigationStart, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-angular';

  /**
   * method costructor responsible for set loading bar in Application
   */
  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
     this.router.events.subscribe((event: Event)=> {
       this.navigationInerceptorn(event);

     });
  }
  /**
   *
   * @param event Methodo responsible for set the events for navigations used in loading bar
   */
  private navigationInerceptorn(event: Event): void{
    if(event instanceof NavigationStart)
    {
      this.loadingBar.start();
    }

    if(event instanceof NavigationCancel)
    {
      this.loadingBar.stop();
    }

    if(event instanceof NavigationError)
    {
      this.loadingBar.stop();
    }

    if(event instanceof NavigationEnd)
    {
      this.loadingBar.complete();
    }

  }
}
