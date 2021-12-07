import { Component, OnInit } from '@angular/core';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-add-to-root',
  templateUrl: './add-to-root.component.html',
  styleUrls: ['./add-to-root.component.scss']
})
export class AddToRootComponent implements OnInit {
  folderName ="";
  faFolderOpen = faFolderOpen;
  faCheck = faCheck;
  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit() {
  }
  addFolder(){
    this.dataSharingService.nodesData.push(
      {
        type: "folder",
        name: this.folderName,
        id: new Date().toString(),
        children: [
        ]
      }
    );
  }

}
