import { Injectable } from '@angular/core';
import { Serie } from './serie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSeriesService {

  private apiUrl = environment.baseUrl + 'series.json'
  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
