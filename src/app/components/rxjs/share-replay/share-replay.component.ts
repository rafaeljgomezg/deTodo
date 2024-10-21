import { Component } from '@angular/core';

import { interval, take, lastValueFrom, firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  standalone: true,
  imports: [],
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.scss'
})



export class ShareReplayComponent {


constructor(){

}
 

ngOnInit(): void {

  const foo = new Observable((subscriber) => {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100);
    subscriber.next(200);
    setTimeout(() => {
      subscriber.next(300); // happens asynchronously
    }, 1000);
  });

  console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');
  
}





}

async function execute() {
  const source$ = interval(1000).pipe(take(10));
  const finalNumber = await firstValueFrom(source$);
  console.log(`The first number is ${finalNumber}`);
}
