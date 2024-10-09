import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LearningComponent } from './components/learning/learning.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    LearningComponent,
    CommonModule,
    JokesComponent,
    AComponent,
    B1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    { name: 'abhi', isMarried: false, salary: 70000 },
    // { name: 'Mahi', isMarried: true, salary: 70000000 },
    // { name: 'AB', isMarried: false, salary: 7000 },
  ];

  // receivedData(e: string) {
  //   console.log(e);
  // }

  // COMPLEX EXAMPLE
  receivedData(e: User) {
    console.log(e);

    // this is used to update the salary which we have received on from child
    const userIndex = this.users.findIndex((u) => u.name === e.name);
    this.users[userIndex].salary = e.newSalary;
  }

  clear() {
    this.users = [];
  }
}
