import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../service/notes.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-keepnotes',
  templateUrl: './keepnotes.component.html',
  styleUrls: ['./keepnotes.component.css']
})
export class KeepnotesComponent {


  isCarsVisible=true;
    close()
    {
      this.isCarsVisible=false;
    };

  notesForm:FormGroup;

  constructor(private fb:FormBuilder,private http:NotesService,private dilogref: DialogRef<KeepnotesComponent>){

    this.notesForm=this.fb.group({       //to bind the data in form inputs
      title:'',
      notes:'',

    });
  }
  onSubmit(){                   //on clicking save button this method will call and submit the data to server
    if(this.notesForm.valid){
      console.log(this.notesForm.value);
      this.http.addNotes(this.notesForm.value).subscribe({
        next:(val: any)=>{
            alert('notes Added Successfully')
            this.dilogref.close();
            console.log(val)
        },
        error:(err:any)=>{
          console.log(err)
        }
      })

    }
  }


}
