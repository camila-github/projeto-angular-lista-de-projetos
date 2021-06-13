import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations';

export const slideInOutLeft: AnimationTriggerMetadata =
  trigger('slide', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('200ms ease-in',
        style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
    ])
  ]);
