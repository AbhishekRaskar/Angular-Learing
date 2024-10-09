import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  // we used the providers to create seperate instances and states 
  providers:[CounterService],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css',
})
export class B1Component {
  constructor(public countService: CounterService) {}
}
