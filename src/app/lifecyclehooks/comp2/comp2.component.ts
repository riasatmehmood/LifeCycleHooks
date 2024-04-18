import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  @Input() messageFromParent: string = '';
  @Output() sendMessageToParent = new EventEmitter<string>();

  // Life Cycle Hokks in action
  ngOnInit(): void {
    // debugger
    console.log("ngOnInit");
  }

  ngOnChanges(obj: SimpleChange): void {
    console.log(obj);
    // This hook will be called only if your components has input bound properties. Otherwise not.
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
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

  // Use below function to send or emit data to parent
  sendMessage(val: string) {
    console.log(val);
    this.sendMessageToParent.emit(val);
  }

}
