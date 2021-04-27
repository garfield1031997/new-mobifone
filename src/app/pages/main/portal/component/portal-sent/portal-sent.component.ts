import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormUploadComponent } from 'src/app/components/form-upload/form-upload.component';
import { PortalModel } from 'src/app/models';
import { CreatePortalComponent } from '../create-portal.component';
import { PortalDetailComponent } from '../portal-detail.component';

@Component({
  selector: 'app-portal-sent',
  templateUrl: './portal-sent.component.html',
  styleUrls: ['./portal-sent.component.scss']
})
export class PortalSentComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  listFilter = [];
  conFig = new PortalModel;
  option = {
    title: 'Thêm mới thông tin',
    type: 'create'
  };
  data = [
    {
      "id": "5",
      "name": "Tổng đài di động trả trước",
      "unit_in_charge_of_business": "Vu.leminh_QC",
      "Unit in charge of engineering": "Hoàng Bảo Trung",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "05-29-2021",
      "status": 'Lưu nháp',
      "ImageURL": 'assets/images/4g.png',
      "check": false
    },
    {
      "id": "6",
      "name": "Trợ lý thông tin Anews",
      "unit_in_charge_of_business": "Quang,tran_NDS",
      "Unit in charge of engineering": "Vũ Chính Thúy",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "06-29-2021",
      "status": 'Lưu nháp',
      "ImageURL": 'assets/images/4g.png',
      "check": false
    },
    {
      "id": "7",
      "name": "Mạng xã hội Buum",
      "unit_in_charge_of_business": "hoang.phamle ",
      "Unit in charge of engineering": "Vũ Chính Thúy",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "07-29-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/4g.png',
      "check": true
    },
    {
      "id": "8",
      "name": "SMS Barring",
      "unit_in_charge_of_business": "dung.manh_NDS",
      "Unit in charge of engineering": "Trịnh Văn Quyết",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "08-29-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/4g.png',
      "check": true
    },
    {
      "id": "9",
      "name": "mStatus",
      "unit_in_charge_of_business": "dung.manh_NDS",
      "Unit in charge of engineering": "Phạm Việt Ánh",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "09-29-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/4g.png',
      "check": true
    },
    {
      "id": "10",
      "name": "Funring",
      "unit_in_charge_of_business": "dung.manh_NDS",
      "Unit in charge of engineering": "Phạm Việt Ánh",
      "Point of contact": 'hanntn@vano.vn ',
      "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
      "Date created": "09-29-2021",
      "status": 'Đã lưu',
      "ImageURL": 'assets/images/funring.png',
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
