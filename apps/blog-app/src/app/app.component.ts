import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'blog-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = new BehaviorSubject<any>(null);
  constructor(public appService: AppService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.getConfig().subscribe((data) => {
      this.hello$.next(data);
    });
    this.hello$.subscribe((data) => console.log('hello', data));
  }
}
