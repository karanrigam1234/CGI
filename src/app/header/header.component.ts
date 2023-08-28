import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeepnotesComponent } from '../keepnotes/keepnotes.component';
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialog:MatDialog, private http:NotesService){}

  ngOnInit(){
    this.getNotesList();
  }
  AddNotes()
  {
   this.dialog.open(KeepnotesComponent)
  }

  getNotesList(){

    this.http.getNotes().subscribe({
      next: (response)=>{

        console.log(response);// just to check the getting data or not

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
