import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private count = 0;

  // this is called the writable signal
  private price = signal(100);

  // computed signal
  triplePrice: Signal<number> = computed(() => this.price() * 3);

  getCounter() {
    return this.count;
  }

  incrementCounter() {
    return (this.count = this.count + 1);
  }

  // Get the current price value (signal)
  getPrice() {
    return this.price();
  }

  // Increment price by 100
  incrementPrice() {
    // to chnage the value directly
    // this.price.set(200);

    // up update the old the value
    // this.price.set(this.price() + 100);
    // or we can write
    this.price.update((currentPrice) => currentPrice + 100);
  }
}
