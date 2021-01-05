import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  getIcon(status, type):string {
    if(status == 0) {
      switch(type) {
        case 0:
          return "./assets/icon/ombrellone-prenotato.png";
        case 1:
          return "./assets/icon/cabina-prenotata.png";
        case 2:
           return "./assets/icon/spogliatoio-prenotato.png";
      }
    }else if(status == 1) {
      switch(type) {
        
      }
    }
  }
}
