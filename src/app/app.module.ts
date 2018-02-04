import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './files/file/file.component';
import { MenuComponent } from './menu/menu.component';
import { FileService } from './provider/file.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    FileComponent,
    MenuComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: FilesComponent},
      { path: '', component: LoginComponent},
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
