import { Component, OnInit ,Input} from '@angular/core';
import { NotesService } from '../Services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() trashNotesList:any;
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes('getTrashNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.trashNotesList=res.data.data;
      },
      error:(err: any) => console.log(err),
      complete:()=>{}
    })
  }
}
