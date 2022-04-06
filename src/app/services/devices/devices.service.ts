import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Device } from "src/app/models/device";

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  apiUrl: string = 'http://localhost:3000/devices';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // POST
  create(Device: any): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this.http.post(API_URL, Device)
      .pipe(
        catchError(this.handleError)
      )
  }

  // GET
  list() {
    return this.http.get(`${this.apiUrl}`);
  }

  // PATCH
  update(id: number, Device: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http.put(API_URL, Device, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  // DELETE
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error :', error.error.message);
    } else {
      console.error(
        `Response Code ${error.status}, ` +
        `Body : ${error.error}`);
    }
    return throwError(
      'Error. Try again later!');
  };
}
