import { Component } from '@angular/core';
import { JokeService } from '../../service/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent {
  joke = 'Loading.....!';
  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.getAnotherJoke();
  }


  getAnotherJoke() {

    
    // this.jokeService.getJoke().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.joke = data.value;
    //   },
    //   (err) => {
    //     console.log('Something Went Wrong', err);
    //   }
    // );

    // ANOTHER WAY TO WRITE 
    this.jokeService.getJoke().subscribe({
      next : (data:any) => this.joke = data.value,
      error : (error) => console.log(error)
      
    })
  }
}
