import { Component, Input, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  faFile = faFile;
  faTrash = faTrash;
  @Input('fileData') fileData: any;
  @Input('parent') parent: any;
  constructor() { }

  ngOnInit() {
  }

  deleteFile(){
    this.parent.children.filter(
      (obj: any, index: number) => {
        if(obj.id === this.fileData.id){
          this.parent.children.splice(index, 1);
        }
      }
    )
  }
}
