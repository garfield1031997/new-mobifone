import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  constructor() { }
  @Input() data: any;
  @Input() option: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Output() callback = new EventEmitter<any>();

  editor: Editor;
  html: '';
  model: any = {};
  imagePath;
  imgURL: any;


  ngOnInit() {        
  console.log(this.dataModel);
    this.imgURL = this.dataModel.ImageURL;
    this.editor = new Editor();
    this.model = this.dataModel || {};
    console.log(this.imgURL);
    
}

preview(files) {
    if (files.length === 0)
      return;
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
ngOnDestroy(): void {
    this.editor.destroy();
}

onCallBackData = () => { }

onClickButton = (i) => {
    this.callback.emit(i);
}

}
