import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent {
  name = 'Abhi';
  age = 25;
  salary = 90000;
  isDisabled = false;
  inputVal = 'test';
  phoneNo = 9877777778;




  // FOR Dynamic variables to display the users 
  users = [
    { name: 'Abhi', isMarried: false, salary: 70000 },
    { name: 'Mahi', isMarried: true, salary: 70000000 },
    { name: 'AB', isMarried: false, salary: 7000 },
  ];
  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
    this.inputVal = value;
  }
}
