import { Component, OnInit } from '@angular/core';
import { IFile } from '../models/IFile';
import { FileService } from '../provider/file.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  keyword: String = '';

  constructor(private _fileService: FileService) {}

  ngOnInit() {
  }

  Search() {
    console.log(this.keyword);
    this._fileService.search(this.keyword);
  }
}
