import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortalModel } from 'src/app/common/model';
import { FormUploadComponent } from 'src/app/shared/layout/form-upload/form-upload.component';
import { CreatePortalComponent } from '../create-portal.component';
import { PortalDetailComponent } from '../portal-detail.component';

@Component({
  selector: 'app-portal-internal',
  templateUrl: './portal-internal.component.html',
  styleUrls: ['./portal-internal.component.scss']
})
export class PortalInternalComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  listFilter = [];
  conFig = new PortalModel;
  option = {
    title: 'Thêm mới thông tin',
    type: 'create'
  };
  data = [
    {
      "id": "1",
      "name": "Facebook SMS",
      "unit_in_charge_of_business": "dung.manh_NDS",
      "Unit in charge of engineering": "Phạm Việt Ánh",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "03-31-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/4g.png',
      "check": true
    },
    {
      "id": "2",
      "name": "E-OneSMS",
      "unit_in_charge_of_business": "Vu.leminh_QC",
      "Unit in charge of engineering": "Đoàn Thị Thu Trang",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "03-30-2021",
      "status": 'Lưu nháp',
      "ImageURL": 'assets/images/eone.png',
      "check": false
    },
    {
      "id": "3",
      "name": "Happy Call",
      "unit_in_charge_of_business": "nhan.nt_NDS",
      "Unit in charge of engineering": "Hoàng Bảo Trung",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "03-29-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/4g.png',
      "check": true
    },
    {
      "id": "4",
      "name": "iCall",
      "unit_in_charge_of_business": "nhan.nt_NDS",
      "Unit in charge of engineering": "Hoàng Bảo Trung",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "04-29-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/4g.png',
      "check": true
    },
 ];
  dataSub = [];


  ngOnInit(): void {
    this.listFilter = this.conFig.filterPortalAll;
    this.dataSub = this.data;
  }
  handleCallback = (value) => {
    const filter = this.listFilter.filter(x => x.value);
    if (!filter.length) return this.dataSub = this.data;
    filter.forEach((x, ix) => {
      if (ix === 0) {
        if (x.type === 'text' || x.type === 'search') {
          this.dataSub = this.data.filter(
            (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
        } else {
          this.dataSub = this.data.filter((a) => a[x.condition] == x.value);
        }
      } else {
        if (x.type === 'text' || x.type === 'search') {
          this.dataSub = this.dataSub.filter(
            (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
        } else {
          this.dataSub = this.dataSub.filter((a) => a[x.condition] == x.value);
        }
      }

    });
  }
  openDialog(item) {
    this.dialog.open(PortalDetailComponent, {
      width: '940px',
      height: '843px',
      data: item
    }).afterClosed().subscribe(result => {

    });

  }
  openDialogCreate() {
    this.dialog.open(CreatePortalComponent, {
      width: '940px',
      height: '843px',
    }).afterClosed().subscribe(result => {

    });

  }
  openDialogImport() {
    this.dialog.open(FormUploadComponent, {
      width: '628px',
      height: '408px'
    }).afterClosed().subscribe(result => {

    });

  }


}
