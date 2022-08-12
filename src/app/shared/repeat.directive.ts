import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  public index:number=0;
  @Input('appRepeat') set render(time:number){
    for(let i=0;i<time ;i++){
      this.index=i;
      this.vcRef.createEmbeddedView(this.temRef);
    }
  }
  constructor(private temRef:TemplateRef<any> , private vcRef:ViewContainerRef) { }

}
