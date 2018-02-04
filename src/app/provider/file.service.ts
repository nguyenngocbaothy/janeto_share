import { Injectable } from '@angular/core';
import { IFile } from '../models/IFile';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileService {
  files: IFile[] = [];

  constructor(private http: Http) { }

  getFile(body) {
    //   this.files = [
    //     {
    //       name: 'Janeto',
    //       date: new Date(Date.now()),
    //       members: ['Kian']
    //     },
    //     {
    //       name: 'LapTrinhVienio',
    //       date: new Date(Date.now()),
    //       members: ['Kian', 'John']
    //     },
    //     {
    //       name: 'Wowlid',
    //       date: new Date(Date.now()),
    //       members: ['abc']
    //     }
    //   ];

    //   return this.files;
    this.http.post('http://localhost:3001/api/file/find',
      body
    ).subscribe(res => {
      var data = res.json();
      this.files = data;
    });

  }

  search(keyword) {
    // console.log(this.files);
    this.files = this.files.filter(
      f => f.name.toLocaleLowerCase().includes(keyword.toLowerCase())
    );
  }

}
