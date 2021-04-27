import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortalModel } from 'src/app/common/model';

@Component({
  selector: 'app-portal-detail',
  template: `<app-create 
                [(data)]="listUpdate" 
                [(dataModel)]="dataModel" 
                [(option)]="option"
                [(arrayButton)]="arrayButton"
                (callback)="handleCallbackEvent($event)"
                >
                </app-create>`
})
export class PortalDetailComponent implements OnInit {
  conFig = new PortalModel;
  dataModel;
  option = {
    title: 'Chi tiết dịch vụ',
    type: 'detail'
  };
  arrayButton = [{
    class: 'mbf-btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'mbf-btn-save-note',
    text: 'Chỉnh sửa'
  }]
  listUpdate;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PortalDetailComponent>,
  ) { }

  ngOnInit(): void {
   
    
    this.dataModel = this.data;
    this.listUpdate = this.conFig.create;
  }

  handleCallbackEvent = (value) => {
    console.log(value);
    
    if(value.text === "Hủy bỏ"){
      console.log(this.dataModel);
      this.dialogRef.close();
      return this.dataModel = this.data;
    }
    if(value.text == 'Lưu'){
      this.dataModel = value.data;
      this.dialogRef.close();
    }
    
  }

}
