import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CtkvModel } from 'src/app/common/model';
import { SupportService } from 'src/app/common/service/support.service';
import { UploadFileStkvComponent } from './upload-file-stkv/upload-file-stkv.component';

@Component({
    selector: 'app-ctkv',
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
export class CtkvComponent implements OnInit {
    conFig = new CtkvModel;
    data = [
        {
            "id": "1",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Đã chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": true
        },
        {
            "id": "2",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Chưa chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": false
        },
        {
            "id": "3",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng DBCC",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Chưa chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": false
        },
        {
            "id": "4",
            "stb": "788772209",
            "ltb": "Trả trước",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Đã chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": true
        },
        {
            "id": "5",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Đã chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": true
        },
        {
            "id": "6",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Chưa chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": false
        },
        {
            "id": "7",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Chưa chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": false
        },

        {
            "id": "8",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Đã chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
            "check": true
        },
        {
            "id": "9",
            "stb": "788772209",
            "ltb": "Trả sau",
            "lkh": "Khách hàng lớn doanh nghiệp",
            "status": 'FB lỗi',
            "address": 'Hai Bà Trưng - Hà Nội',
            "status2": 'Chưa chuyển',
            "city": "1",
            "district": "Hai Bà Trưng",
            "wark": "Nguyễn Du",
            "information_entered": "Phòng ban: C1_01.Đối tác Minh Phúc - Công ty 1C1_YENNTK63_MP",
            "processing_information": "Phòng ban: MVAS NDS - Trung tâm MVASC1_TUNGNM54_MP ",
            "number_of_reflections": 40,
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
        // hasd code data selected
        this.listFilter[1].data = [{
            value: 'Trả sau',
            name: 'Trả sau'
        },
        {
            value: 'Trả trước',
            name: 'Trả trước'
        }]
        this.listFilter[2].data = [{
            value: 'Khách hàng DBCC',
            name: 'Khách hàng DBCC'
        },
        {
            value: 'Khách hàng lớn doanh nghiệp',
            name: 'Khách hàng lớn doanh nghiệp'
        },
        {
            value: 'Khách hàng nội bộ',
            name: 'Khách hàng nội bộ'
        },
        {
            value: 'Khu vực VIP',
            name: 'Khu vực VIP'
        },
        {
            value: 'Khách hàng VIP',
            name: 'Khách hàng VIP'
        }]
        this.listFilter[3].data = [{
            value: 'FB lỗi',
            name: 'FB lỗi'
        }, {
            value: 'Đang xử lý',
            name: 'Đang xử lý'
        }, {
            value: 'Xử lý xong',
            name: 'Xử lý xong'
        }]
        this.listFilter[8].data = [{
            value: 'Chưa chuyển',
            name: 'Chưa chuyển'
        }, {
            value: 'Đã chuyển',
            name: 'Đã chuyển'
        }]
        this.service.getAllProvinceByCountryId().subscribe(res => {
            this.listFilter[5].data = res.map(x => {
                return {
                    value: x.ProvinceId,
                    name: x.Name,
                    ProvinceId: x.ProvinceId
                }
            })
        })
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
        console.log(filter);

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
            return this.dialog.open(UploadFileStkvComponent, {
                width: '628px',
                height: '408px'
            }).afterClosed().subscribe(result => {

            });
        }
    }

}
