import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  public hello: string[] = ['h', 'e', 'l', 'l', 'o', '!'];

  constructor() {}

  public greeting() {
    let newArray;
    this.hello.forEach((letter) => {
      letter += letter;
      newArray.push(letter);
    });
    return newArray;
  }
}
