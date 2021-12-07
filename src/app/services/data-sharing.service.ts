import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NodeModel } from '../interfaces/nodeModel';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  nodesData: NodeModel[] =[
    {
      type: "folder",
      name: "project-pixar",
      id: "uniqueid10",
      children: [
        {
          type: "folder",
          name: "pixar-docs",
          id: "uniqueid9",
          children: [
            {
              type: "folder",
              name: "pixar-pdf-docs",
              id: "uniqueid5",
              children: [
                {
                  type: "files",
                  name: "pixar-pdf-1",
                  id: "uniqueid1",
                  children: [
                  ],
                },
                {
                  type: "files",
                  name: "pixar-pdf-2",
                  id: "uniqueid3",
                  children: [
                  ]
                },
                {
                  type: "files",
                  name: "pixar-pdf-3",
                  id: "uniqueid4",
                  children: [
                  ]
                }
              ]
            },
            {
              type: "folder",
              name: "pixar-image-docs",
              id: "uniqueid8",
              children: [
                {
                  type: "files",
                  name: "pixar-image-1",
                  id: "uniqueid6",
                  children: [
                  ]
                },
                {
                  type: "files",
                  name: "pixar-image-2",
                  id: "uniqueid7",
                  children: [
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
constructor() { }
}
