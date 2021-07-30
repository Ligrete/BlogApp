import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@blog-app-workspace/api-interfaces';

@Component({
  selector: 'blog-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hello$.subscribe(data => console.log(data));
  }
}
