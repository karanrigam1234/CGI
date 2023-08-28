import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NotesService } from '../service/notes.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
noteList:any;
  constructor(private svs:HttpClient,private http:NotesService){}

  ngOnInit(){
    this.fetchNotes();
  }

  fetchNotes(){

    this.http.getNotes().subscribe((data:any)=>{
      this.noteList=data;
    },
      error=>{
        console.error('Cant fetch the Notes From server:',error)
      }
    );

  }

}
