import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupportModel } from 'src/app/common/model';
import { SupportService } from 'src/app/common/service/support.service';
import { UploadFileComponent } from './upload-file/upload-file.component';

@Component({
    selector: 'app-support',
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
export class SupportComponent implements OnInit {
    conFig = new SupportModel;
    data = [
        {
            "id": "1",
            "npt": "Không xác định",
            "lpa": "Tin nhắn rác",
            "mpa": "Mobi",
            "ttdnc": 'Đã đăng ký',
            "lnpt": "không xác định",
            "tgpa": "04-04-2021",
            "ndpa": "Ä(QC) Nhan ngay khoan vay tin dung han muc den 50 trieu...",
            "stb": "84901343489",
            "tgdnc": "02/04/2021 14:03:05",
            "ttxl": "Chưa xử lý",
            "check": false

        },
        {
            "id": "2",
            "npt": "Không xác định",
            "lpa": "S_Sms",
            "mpa": "Mobi",
            "ttdnc": 'Đã đăng ký',
            "lnpt": "không xác định",
            "tgpa": "04-04-2021",
            "ndpa": "Ä(QC) Nhan ngay khoan vay tin dung han muc den 50 trieu ",
            "stb": "84901343489",
            "tgdnc": "02/04/2021 14:03:05",
            "ttxl": "Chưa xử lý",
            "check": false
        },
        {
            "id": "3",
            "npt": "Không xác định",
            "lpa": "S_Sms",
            "mpa": "Mobi",
            "ttdnc": 'Đã đăng ký',
            "lnpt": "không xác định",
            "tgpa": "04-04-2021",
            "ndpa": "Ä(QC) Nhan ngay khoan vay tin dung han muc den 50 trieu ",
            "stb": "84901343489",
            "tgdnc": "02/04/2021 14:03:05",
            "ttxl": "Chưa xử lý",
            "check": false
        },
        {
            "id": "4",
            "npt": "Không xác định",
            "lpa": "S_Sms",
            "mpa": "Mobi",
            "ttdnc": 'Đã đăng ký',
            "lnpt": "không xác định",
            "tgpa": "04-04-2021",
            "ndpa": "Ä(QC) Nhan ngay khoan vay tin dung han muc den 50 trieu ",
            "stb": "84901343489",
            "tgdnc": "02/04/2021 14:03:05",
            "ttxl": "Chưa xử lý",
            "check": false
        },
        {
            "id": "5",
            "npt": "Không xác định",
            "lpa": "S_Sms",
            "mpa": "Mobi",
            "ttdnc": 'Đã đăng ký',
            "lnpt": "không xác định",
            "tgpa": "04-04-2021",
            "ndpa": "Ä(QC) Nhan ngay khoan vay tin dung han muc den 50 trieu ",
            "stb": "84901343489",
            "tgdnc": "02/04/2021 14:03:05",
            "ttxl": "Chưa xử lý",
            "check": false
        },
        {
            "id": 6,
            "npt": "Không xác định",
            "lpa": "S_Sms",
            "mpa": "Mobi",
            "ttdnc": 'Đã đăng ký',
            "lnpt": "không xác định",
            "tgpa": "04-04-2021",
            "ndpa": "Ä(QC) Nhan ngay khoan vay tin dung han muc den 50 trieu ",
            "stb": "84901343489",
            "tgdnc": "02/04/2021 14:03:05",
            "ttxl": "Chưa xử lý",
            "check": false
        }

    ]
    listlable;
    listFilter;
    dataSub = [];
    listActive = [];


    constructor(
        private service: SupportService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.dataSub = this.data;
        this.listlable = this.conFig.collums;
        this.listFilter = this.conFig.filter;
        this.listActive = this.conFig.btnActice;
        this.listFilter[3].data = [{
            value: 'Đã đăng ký',
            name: 'Đã đăng ký'
        }, {
            value: 'Chưa đăng ký',
            name: 'Chưa đăng ký'
        }];
        this.listFilter[6].data = [{
            value: 'Đã xử lý',
            name: 'Đã xử lý'
        }, {
            value: 'Chưa xử lý',
            name: 'Chưa xử lý'
        },
        {
            value: 'Không hợp lệ',
            name: 'Không hợp lệ'
        },
        {
            value: 'Đã chặn một chiều',
            name: 'Đã chặn một chiều'
        }]
        // hasd code data selected
    }

    handleCallback = (value) => {
        if (value.condition === 'city') {
            if (!value.value) return this.listFilter[7].data = [];
            this.service.getAllDistrictByProvinceId(value.value).subscribe(res => {
                this.listFilter[7].data = res.map(x => {
                    return {
                        value: x.ProvinceId,
                        name: x.Name,
                        ProvinceId: x.ProvinceId
                    }
                })
            })
        }
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
            return this.dialog.open(UploadFileComponent, {
                width: '628px',
                height: '408px'
            }).afterClosed().subscribe(result => {
                if (value.service === "support" && result !== undefined) {
                    let data = result.map(x => {
                        return {
                            id: x.Id,
                            npt: x['Nguồn phát tán'],
                            lpa: x['Loại phản ánh'],
                            mpa: x['Mạng phản ánh'],
                            ttdnc: x['Trạng thái DNC'],
                            lnpt: x['Loại nguồn phát tán'],
                            tgdnc: x['Thời gian phản ánh'],
                            ndpa: x['Nội dung phản ánh'],
                            stb: x['Số điện thoại phản ánh'],
                            ttxl: x['Tình trạng xử lý'],
                            tgpa: x['Thời gian phản ánh'],
                            check: x['Tình trạng xử lý'] == 'Chưa xử lý' || x['Tình trạng xử lý'] == 'Không hợp lệ' ? false : true
                        }

                    })
                    this.data = this.data.concat(data);
                    return this.dataSub = this.data
                }
            });
        }
    }

}
