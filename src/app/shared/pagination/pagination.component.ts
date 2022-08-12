import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() perPage:number=0;
  @Input() ItemCount:number=0;
  Arr = Array;
  currentPage:number=0;
  constructor() {  }

  ngOnInit(): void {
  }

  nextPage(){
    this.currentPage++;
    console.log(this.currentPage)
  }
  prePage(){
    this.currentPage--;
    console.log(this.currentPage)
  }
  setPage(page:number){
    this.currentPage=page;
  }
}
