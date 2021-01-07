import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  getIcon(status:number, type:number):string {
    if(status == -1) {
      switch(type) {
        case 0:
          return "./assets/icon/error.jpg";
        case 1:
          return "./assets/icon/error.jpg";
        case 2:
           return "./assets/icon/error.jpg";
      }
    }else if(status == 0) {
      switch(type) {
        case 0:
          return "./assets/icon/ombrellone-free.png";
        case 1:
          return "./assets/icon/cabina-free.png";
        case 2:
           return "./assets/icon/spogliatoio-free.png";
      }
    }else if(status == 1) {
      switch(type) {
        case 0:
          return "./assets/icon/ombrellone-busy.png";
        case 1:
          return "./assets/icon/cabina-busy.png";
        case 2:
           return "./assets/icon/spogliatoio-busy.png";
      }
    }else if(status == 2) {
      switch(type) {
        case 0:
          return "./assets/icon/ombrellone-reserved.png";
        case 1:
          return "./assets/icon/cabina-reserved.png";
        case 2:
           return "./assets/icon/spogliatoio-reserved.png";
      }
    }
  }
}
