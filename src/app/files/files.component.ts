import { Component, OnInit } from '@angular/core';
import { IFile } from './../models/IFile';
import { FileService } from '../provider/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: IFile[];
  temp: IFile[];
  title: String = 'JANETO';
  keyword: String = '';
  body = {
    "search": "",
    "parentId": "root"
  };

  constructor(private _fileService: FileService) {
    this._fileService.getFile(this.body);
    this.files = this._fileService.files;
    this.temp = Object.assign([], this.files);
   }

  ngOnInit() {
    // this.files = [
    //   {
    //     name: 'Janeto',
    //     date: new Date(Date.now()),
    //     members: ['Kian']
    //   },
    //   {
    //     name: 'LapTrinhVienio',
    //     date: new Date(Date.now()),
    //     members: ['Kian', 'John']
    //   },
    //   {
    //     name: 'Wowlid',
    //     date: new Date(Date.now()),
    //     members: ['abc']
    //   }
    // ];

    this.temp = this.files;
  }

  download(title: string) {
    this.title = title;
  }

  Search() {
    console.log(this.keyword);
    // this.files = this.temp.filter(
    //   f => f.name.toLocaleLowerCase().includes(this.keyword.toLowerCase())
    // );

    this._fileService.search(this.keyword);
    this.files = this._fileService.files; // cap nhat lai files trong service
  }

  get() {
    this.files = this._fileService.files;
  }

  gotoFolder(file: IFile) {
    this._fileService.getFile({
      "search": "",
      "parentId": file._id
    });
  }
}
