import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  getIcon(status, type):string {
    if(status == 0) {
      switch(type) {
        case 0:
          return "ombrellone libero";
        case 1:
          return "cabina libero";
        case 2:
           return "spogliatoio libero";
      }
    }
  }
}
