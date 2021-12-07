import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FolderActionsComponent } from './folder/folder-actions/folder-actions.component';
import { FormsModule } from '@angular/forms';
import { AddToRootComponent } from './add-to-root/add-to-root.component';

@NgModule({
  declarations: [	
    AppComponent,
      FolderComponent,
      FileComponent,
      FolderActionsComponent,
      AddToRootComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
