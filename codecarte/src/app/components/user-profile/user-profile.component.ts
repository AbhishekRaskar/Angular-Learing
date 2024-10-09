import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { User } from '../../../models/user';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  //  1.PARENT TO CHILD DATA PASSING --->

  // @Input() name = '';

  // OR you can write
  // @Input({ alias: 'userName', transform: formatName }) name = '';

  @Input({ transform: booleanAttribute }) isMarried!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;

  // 2.  CHILD TO PARENT DATA PASSING --->
  // @Output() myEvent = new EventEmitter<string>();
  // sendData(){
  //   this.myEvent.emit("Coder Never Quits")
  // }

  // FOR COMPLEX EXAMPLE
  @Input({ alias: 'userName' }) name = '';
  // COMPLEX EXAMPLE
  @Output() myEvent = new EventEmitter<User>();
  sendData() {
    this.myEvent.emit({ name: this.name, newSalary: 90000 });
  }

  //CUSTOM DIRECTIVE EXAMPLE
  bgColor = 'teal';

  // LIFE CYCLE METHODS
  // 1
  constructor() {
    // we can init properties
    // we can ineject dependencies
    // we can regsiter event listner

    console.log('constructor called', this.name);
    console.log('constructor called', this.heading?.nativeElement.textContent);

  }

  // 2
  ngOnInit() {
    // we can init properties
    // we can ineject dependencies
    // we can call initial API call when compo is ready

    console.log('ngOnInit called', this.name);
    console.log('ngOnInit called', this.heading?.nativeElement.textContent);
  }

  // 3
  ngOnDestroy() {
    // we clean up event listeners in this
    // ie. unregister{when compo is no longer needed}
    console.log('ngOnDestroy called');
  }

  //  4
  ngOnChanges(changes: SimpleChanges): void {
    // it is called where there is a change in app
    console.log("ngOnChanges",changes);
    console.log('ngOnChanges called', this.heading?.nativeElement.textContent);

  }

  // 5
   ngAfterViewInit() : void {
    // to get access of elements content we use this
    // it only give when template is ready 
    console.log('ngAfterViewInit called', this.heading?.nativeElement.textContent);

   }





  // To access variable by template variable used with #
@ViewChild("myheading") heading? :ElementRef 
}
