import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countCompleted = false;
  countDown = 5;
  count$: Observable<number>;
  message = 'Happy Birthday!';

  ngOnInit() {
    const timer = interval(1000);
    this.count$ = timer.pipe(
      map(i => this.countDown - i),
      takeWhile(i => i > 0),
      finalize(() => (this.countCompleted = true))
    );
  }
}
