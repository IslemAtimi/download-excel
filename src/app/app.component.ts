import { Component } from '@angular/core';
import { GenerateExcelService } from './service/generate-excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab-excel';
  page:number=2
  size:number=10

  
  constructor(private service:GenerateExcelService) { }

  download(){
    var data = [
      { Name: 'ATCHI Islem', Age: 28, City: 'climat de france' },
      { Name: 'ATCHI Zeineb', Age: 24, City: 'missonier' },
    ]
    this.service.generateExcel(data, 'excelTest');
  }
  changePage(){
    this.page=this.page+1
  }
}
