import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
  // constructor(private countService: CounterService) {}

  // getCount() {
  //   return this.countService.getCounter();
  // }


  // ANOTHER WAY easily access the getCounter services
  constructor(public countService: CounterService) {}

}
