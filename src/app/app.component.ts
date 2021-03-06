import { Component } from '@angular/core';
import {trigger, transition, group, query, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 3 => 4, 1 => 3, 1 => 4, 2 => 4', [
          style({ height: 'auto' }),
          query(':enter', style({ transform: 'translateX(100%)' })),
          query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
          // animate the leave page away
          group([
              query(':leave', [
                  animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
              ]),
              // and now reveal the enter
              query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          ]),
      ]),
      transition('4 => 3, 3 => 2, 2 => 1, 3 => 1, 4 => 1, 4 => 2', [
          style({ height: 'auto' }),
          query(':enter', style({ transform: 'translateX(-100%)' })),
          query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
          // animate the leave page away
          group([
              query(':leave', [
                  animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
              ]),
              // and now reveal the enter
              query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          ]),
      ]),
  ])
  ],
})
export class AppComponent {

  title = 'Page Transition';

getDepth(outlet) {
  return outlet.activatedRouteData['depth'];
}

}
