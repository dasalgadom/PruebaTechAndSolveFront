import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-removals',
  templateUrl: './removals.component.html',
  styleUrls: ['./removals.component.css']
})
export class RemovalsComponent implements OnInit {

  constructor(private fileservice: FileService) { }

  removalForm: FormGroup;
  public myFile: File;
  public document: number;
  public output: any[] = [];

  ngOnInit() {
  }

  imagen($event) {
    this.myFile = $event.srcElement.files[0];
  }

  onSubmit(Excel) {

    this.fileservice.UpdateFile(this.myFile, this.document).subscribe(
      data => {
       this.output = data;
      },
      err => {
      },
    );
  }

}
