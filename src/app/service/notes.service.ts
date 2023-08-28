import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
export interface Books {

  title:string;
  notes:string;
}
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }
  addNotes(data:any){
    return this.http.post('http://localhost:3000/notes',data);
  }

  getNotes():Observable <Books[]>{
    return this.http.get<Books[]>('http://localhost:3000/notes');
  }
}
