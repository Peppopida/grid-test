import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  getIcon(status, type):string {
    if(status == 0) {
      switch(type) {
        case 0:
          return "./assets/icon/ombrellone-libero.png";
        case 1:
          return "./assets/icon/cabina-libera.png";
        case 2:
           return "./assets/icon/spogliatoio-libero.png";
      }
    }else if(status == 1) {
      switch(type) {
        
      }
    }
  }
}
