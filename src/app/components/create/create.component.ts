import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
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
  edit = true;
  constructor(
  ) { }

  ngOnInit() {
    this.imgURL = this.dataModel.ImageURL;
    this.editor = new Editor();
    this.model = this.dataModel || {};
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

  onClickButton = (i, index) => {
    if (i.text == 'Chỉnh sửa') {
      this.edit = false;
      this.arrayButton.splice(index, 1);
    }
    else {
      this.callback.emit(i);
    }
  }
  clickSave() {
    this.callback.emit(
      {
        class: 'mbf-btn-save-note',
        text: 'Lưu',
        data: this.dataModel
      });
  }
}
