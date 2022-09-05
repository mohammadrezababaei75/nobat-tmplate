import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() perPage:number=0;
  @Input() ItemCount:number=0;
  @Output() onSelectPage=new EventEmitter;
  Arr = Array;
  currentPage:number=0;
  constructor(private mService :MainService) {  }

  ngOnInit(): void {
  }

  nextPage(){
    //this.currentPage++;
    //this.setPage(this.currentPage+1);
    //console.log(this.currentPage)
  }
  prePage(){
    //this.currentPage--;
    //this.setPage(this.currentPage-1);
    //console.log(this.currentPage)
  }
  setPage(pageNumber:number){
    this.currentPage=pageNumber;
    this.onSelectPage.emit(pageNumber)
  }

  
}
