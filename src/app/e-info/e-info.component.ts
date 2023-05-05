import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css']
})
export class EInfoComponent {
  emp1: string[]=[];
  emp2: string[]=[];
  emp3: string[]=[];

  getInfoFromService1(){
    this.emp1= this.info.getInfo1();
  }
  getInfoFromService2(){
    this.emp2= this.info.getInfo2();
  }
  getInfoFromService3(){
    this.emp3= this.info.getInfo3();
  }
  constructor(private info:DataService){}
}
