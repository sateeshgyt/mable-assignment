import { Component, OnInit } from '@angular/core';
import { NodeModel } from './interfaces/nodeModel';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mable-assignment';
  nodesList: NodeModel[] = [];
  spacer = 10;
  isRootEnabled = false;
  constructor(private dataSharingService: DataSharingService){}

  ngOnInit(){
    this.nodesList = this.dataSharingService.nodesData;
  }
  addFolderAtRoot(){
    this.isRootEnabled = !this.isRootEnabled;
  }
}
