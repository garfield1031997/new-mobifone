import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CSKHModel } from 'src/app/common/model/cskh.model';
import { UpdateComponent } from '../../portal/component/update.component';
import { ScanDetailComponent } from '../scan/scan-detail/scan-detail.component';
import { UpdateFileCskhComponent } from '../update-file-cskh/update-file-cskh.component';

@Component({
    selector: 'app-cskh',
    template: ` <app-filter 
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
export class CSKHComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private router: Router
    ) { }
    conFig = new CSKHModel;
    listFilter;
    listlable;
    dataSub = [];
    listActive;
    data = [
        {
            "stt": "1",
            "dvcskh": "SMPP",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "OK",
            "dvkt": "Trung tâm 1",
            "date": "09-03-2021"
        },
        {
            "stt": "2",
            "dvcskh": "Music Talk (BGM)",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 2",
            "date": "04-09-2021"
        },
        {
            "stt": "3",
            "dvcskh": "18001090",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "OK",
            "dvkt": "Trung tâm 3",
            "date": "04-09-2021"
        },
        {
            "stt": "4",
            "dvcskh": "Tra cứu TBDC KH sử dụng",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 4",
            "date": "04-09-2021"
        },
        {
            "stt": "5",
            "dvcskh": "Dịch vụ 4G",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 5",
            "date": "04-09-2021"
        },
        {
            "stt": "6",
            "dvcskh": "SMSC 22, 23, 24",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 6",
            "date": "04-09-2021"
        },
        {
            "stt": "7",
            "dvcskh": "SMSC 15,17,25",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 7",
            "date": "04-09-2021"
        },
        {
            "stt": "8",
            "dvcskh": "Support game loft",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 8",
            "date": "04-09-2021"
        },
        {
            "stt": "9",
            "dvcskh": "CSKH Mobifone Info",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 9",
            "date": "04-09-2021"
        },
        {
            "stt": "10",
            "dvcskh": "Tra cứu SMS",
            "cskh": "https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090",
            "tt": "NOT OK",
            "dvkt": "Trung tâm 10",
            "date": "04-10-2021"
        }
    ]

    ngOnInit(): void {
        this.dataSub = this.data;
        this.listlable = this.conFig.collums;
        this.listFilter = this.conFig.filter;
        this.listActive = this.conFig.btnActice;
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
        if (value.type === 'import') {
            return this.dialog.open(UpdateFileCskhComponent, {
                width: '600px',
                height: '400px'
            }).afterClosed().subscribe(result => {
                console.log(result);

                if (value.service === "cskh" && result !== undefined) {
                    let data = result.map(x => {
                        return {
                            stt: x.STT,
                            dvcskh: x["Dịch vụ CSKH"],
                            date: x["Ngày quét gần nhất"],
                            cskh: x['Trang CSKH'],
                            dvkt: x["Đơn vị kĩ thuật"],
                            tt: x["Trạng thái"]
                        }

                    })
                    if(data[0].stt !== undefined || data[0].date !== undefined){
                        this.data = this.data.concat(data);
                        return this.dataSub = this.data;
                    }
                    else{
                        return this.dataSub = this.data;
                    }
                   
                }

            });
        }
        if (value.type === 'scan') {
            this.router.navigateByUrl('/pages/cskh/scan');
        }
    }
}