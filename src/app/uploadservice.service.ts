import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UploadserviceService {
  constructor(private http: Http) {}
  uploadFileToServer(filePath) {
    alert('Calling Upload Service:' + 'localhost:8080/fileupload?' + filePath);
    return this.http.get('localhost:8080/fileupload?' + filePath)
      .map((response: Response) => response.json())
  }
  }
