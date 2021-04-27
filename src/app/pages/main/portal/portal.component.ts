import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortalModel } from 'src/app/common/model';
import { PortalService } from 'src/app/common/service/portal.service';
import { CreatePortalComponent } from './component/create-portal.component';
import { UpdateComponent } from './component/update.component';
@Component({
    selector: 'app-portal',
    template: `
            <app-filter 
                [(listFilter)]="listFilter" 
                (callback)="handleCallback($event)">
            </app-filter>
            <br />
            <app-table 
                [(data)]="dataSub" 
                [(listlable)]="listlable"
                [(listActive)]="listActive"  
                (callback)="handleCallbackSettingTable($event)">
            </app-table>`
})
export class PortalComponent implements OnInit {
    conFig = new PortalModel;
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
            "check": true
        },
        {
            "id": "5",
            "name": "Tổng đài di động trả trước",
            "unit_in_charge_of_business": "Vu.leminh_QC",
            "Unit in charge of engineering": "Hoàng Bảo Trung",
            "Point of contact": 'hanntn@vano.vn ',
            "Lookup page": 'https://10.51.35.102:8143/cs/home.html#change',
            "Date created": "05-29-2021",
            "status": 'Lưu nháp',
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
            "check": true
        }
    ]
    listlable = [];
    listFilter = [];
    dataSub = [];
    listActive = [];

    constructor(
        private service: PortalService,
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.onLoadDataService();
        this.dataSub = this.data;
        this.listlable = this.conFig.collums;
        this.listFilter = this.conFig.filter;
        this.listActive = this.conFig.btnActice;        
        //hard code data filter selecter
        this.listFilter[5].data = [{
            value: 'Đã lưu',
            name: 'Đã lưu'
        }, {
            value: 'Lưu nháp',
            name: 'Lưu nháp'
        }]
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

    handleCallbackSettingTable = (value) => {
        if (value.type === 'delete') return this.dataSub = this.data.filter(x => x.id !== value.item.id);
        if (value.type === 'edit') {
            return this.dialog.open(UpdateComponent, {
                width: '940px',
                height: '843px',
                data: value.item
            }).afterClosed().subscribe(result => {
                this.onLoadDataService();
            });
        }
        if (value.type === 'create') {
            return this.dialog.open(CreatePortalComponent, {
                width: '940px',
                height: '843px'
            }).afterClosed().subscribe(result => {
                this.onLoadDataService();
            });
        }
    }

    onLoadDataService = () => {
        this.dataSub = this.data;
    }

}
