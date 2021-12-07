import { Component, Input, OnInit } from '@angular/core';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input('folderData') folderData: any;
  @Input('parent') parent: any;
  faFolderOpen = faFolderOpen;
  constructor() { }

  ngOnInit() {
  }

}
