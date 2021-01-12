import { Component, OnInit } from '@angular/core';

import { IconService } from './icon.service';
import { ElementBeach } from './model/element-beach.model';
import { ElementCoord } from './model/element-coord.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elementsBeach:ElementBeach[] = [
    {id:10, name:'Cabina', status:1, type:1, section:0, isEmpty:false},
    {section:0, isEmpty:true},
    {id:13, name:'Cabina', status:0, type:1, section:0, isEmpty:false},
    {id:2, name:'Ombrellone', status:1, type:2, section:1, isEmpty:false},
    {id:4, name:'Ombrellone', status:2, type:2, section:2, isEmpty:false},
    {section:1, isEmpty:true},
    {id:50, name:'Cabina', status:2, type:1, section:2, isEmpty:false},
    {section:2, isEmpty:true}
  ];
  elementCoord:ElementCoord[] = [
    {id: 56, isFree: true, section: 0, coordX: 0, coordY: 0},
    {id: 4, isFree: false, section: 0, coordX: 40, coordY: 40},
    {id: 17, isFree: true, section: 0, coordX: 80, coordY: 80},
    {id: 90, isFree: false, section: 0, coordX: 0, coordY: 80},
    {id: 89, isFree: true, section:0, coordX: 40, coordY: 0}
  ];
  elementsBeachSelected:ElementCoord[] = [];
  pathElementFree = "./assets/icon/element-beach-free.png";
  pathElementBusy = "./assets/icon/element-beach-busy.png";
  statusName='';
  isEmpty:boolean;

  constructor(private iconService:IconService) {}

  ngOnInit() {}

  getIcon(status:number, type:number):string {
    return this.iconService.getIcon(status, type);
  }

  onSelectElementBeach(elementSelected:ElementCoord) {
    elementSelected.isSelect = !elementSelected.isSelect;
    if(elementSelected.isFree) {
      if(elementSelected.isSelect) {
        console.log(`id: ${elementSelected.id}`);
        this.elementsBeachSelected.push(elementSelected);
      }else{
        //eliminare dalla lista dei selezionati la postazione deselezionata
        console.log(`id: ${elementSelected.id} eliminata!`);
        
      }
    }
  }

  /* removeDeselectedElement(id) {
    for(let i=0 ; i<this.elementsBeachSelected.length ; i++) {
      const num = this.elementsBeachSelected[i].id;
      if(num % 2 === 0) {
        this.elementsBeachSelected.splice(i, 1);
      }
    }
    console.log(`Selezionati: ${JSON.stringify(this.elementsBeachSelected)}`);
  } */
}
