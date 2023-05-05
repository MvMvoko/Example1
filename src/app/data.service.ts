import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[]=["Mvuyisi Mvoko", "E354","Mvuyisimvoko@gmail.com"];
  info2:string[]=["Gilbert Makinana", "E664","gmakinana@gmail.com"];
  info3:string[]=["Kuminga ", "E101","kmg@gmail.com"];

  getInfo1():string[]{
    return this.info1;
  }
  getInfo2():string[]{
    return this.info2;
  }
  getInfo3():string[]{
    return this.info3;
  }
  constructor() { }
}
