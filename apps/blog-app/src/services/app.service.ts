import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@blog-app-workspace/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getConfig(): Observable<Message> {
    // now returns an Observable of Config
    return this.http.get<Message>(environment.apihost+'/api/hello');
  }
}
