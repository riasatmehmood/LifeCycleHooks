import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }
  // parentMsg = [ 'Ali','Hamza']
  parentMsg = 'Message from parent to child "Israel is a terrorist state"'
  ngOnInit(): void {
    // debugger
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    // debugger
    console.log("ngOnChanges");
  }

  ngDoCheck(obj: any): void {
    // debugger
    console.log("ngDoCheck");

  }

  ngAfterContentInit(): void {
    // debugger
    console.log("ngAfterContentInIt");
  }

  ngAfterContentChecked(): void {
    // debugger
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    // debugger
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    // debugger
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    // debugger
    console.log("ngOnDestroy");
  }

  childVal: string= '';
  getValueFromChild(value:string) {
    console.log(value);
    this.childVal = value
  }
}
