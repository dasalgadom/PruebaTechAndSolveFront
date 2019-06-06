import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private urlGeneral;
  constructor(private httpClient: HttpClient) { }


  UpdateFile(fileToUpload: File, document: number) {
    const formData = new FormData();
    formData.append('fileinput', fileToUpload, fileToUpload.name);
    const url = environment.urlApi
    const endPoint = `/api/UploadFile/file/?document=${document}`
    this.urlGeneral = url + endPoint;
    return this.httpClient.post(this.urlGeneral, formData).pipe(map((data: any) => { return data; }))
  
}

}
