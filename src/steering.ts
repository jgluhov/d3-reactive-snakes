import { Observable } from './lib/rxjs';
import { keyCodes } from './constants';

interface Point2D {
  x: number;
  y: number;
}

interface Directions {
  [key: number]: Point2D;
}

const directions: Directions = {
  [keyCodes.arrowUp]: { x: 0, y: -1 },
  [keyCodes.arrowRight]: { x: 1, y: 0 },
  [keyCodes.arrowDown]: { x: 0, y: 1 },
  [keyCodes.arrowLeft]: { x: -1, y: 0 },
};

const keydown$ = Observable.fromEvent(document, 'keydown');

export const direction$ = keydown$
  .map((event: KeyboardEvent) => directions[event.keyCode])
  .filter((direction: Point2D) => !!direction);
