import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-folder-actions',
  templateUrl: './folder-actions.component.html',
  styleUrls: ['./folder-actions.component.scss']
})
export class FolderActionsComponent implements OnInit {
  @Input('folderDetails') folderDetails: any;
  @Input('parent') parent: any;
  open = false;
  isAddFolderEnabled = false;
  isAddFileEnabled = false;
  faTrash = faTrash;
  faPlus = faPlus;
  faFolderOpen = faFolderOpen;
  faFile = faFile;
  faCheck = faCheck;
  faTimes = faTimes;
  folderName ="";
  fileName ="";
  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit() {
  }

  openFileOrFolderActions(){
    this.open = !this.open;
  }
  openFolder(){
    this.isAddFolderEnabled = !this.isAddFolderEnabled;
    this.isAddFileEnabled = false;
  }
  openFile(){
    this.isAddFileEnabled = !this.isAddFileEnabled;
    this.isAddFolderEnabled = false;
  }

  addFolder(){
    // date is used to genarate the unique-id for each folder or file
    this.folderDetails.children.push(
      {
        type: "folder",
        name: this.folderName,
        id: new Date().toString(),
        children: [
        ]
      }
    );
  }

  addFile(){
    // date is used to genarate the unique-id for each folder or file
    this.folderDetails.children.push(
      {
        type: "files",
        name: this.fileName,
        id: new Date().toString(),
        children: [
        ]
      }
    );
  }

  deleteFolder(){
    if(this.parent){
      (this.parent.children?this.parent.children:this.parent).filter(
        (obj: any, index: number) => {
          if(obj.id === this.folderDetails.id){
            (this.parent.children?this.parent.children:this.parent).splice(index, 1);
          }
        }
      );
    }

  }
}
