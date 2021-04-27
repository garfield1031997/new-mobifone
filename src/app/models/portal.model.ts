import { BtnGroupModel } from "./base/btngroup.model";
import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class PortalModel {
    EmployeeId: number;
    WorkingYear: number;
    WorkingMonth: number;
    CategoryId: number;
    Title: string;
    Amount: number;
    Type: number;

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'id',
                name: 'STT',
                width: 50,
                type: 'number'
            },
            {
                id: 'name',
                name: 'Tên dịch vụ',
                width: 200,
                type: 'text'
            },
            {
                id: 'unit_in_charge_of_business',
                name: 'Đơn vị chủ trì kinh doanh',
                width: 200,
                type: 'text',
            },
            {
                id: 'Unit in charge of engineering',
                name: 'Đơn vị chủ trì kỹ thuật',
                width: 200,
                type: 'text',
            },
            {
                id: 'Point of contact',
                name: 'Đầu mối liên hệ CSKH đối tác',
                width: 250,
                type: 'text',
            },
            {
                id: 'Lookup page',
                name: 'Trang tra cứu CSKH',
                width: 200,
                type: 'text',
            },
            {
                id: 'Date created',
                name: 'Ngày tạo',
                width: 200,
                type: 'date',
            },
            {
                id: 'status',
                name: 'Tình trạng',
                width: 100,
                type: 'text-color',
                color: '#E00000'
            },
            {
                id: 'setting',
                name: '',
                width: 100,
                type: 'setting'
            }
        ];
    }
    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Tên dịch vụ',
                type: 'text',
                condition: 'name'
            },
            {
                Text: 'Đơn vị chủ trì kinh doanh',
                type: 'text',
                condition: 'unit_in_charge_of_business'
            },
            {
                Text: 'Đầu mối liên hệ CSKH đối tác',
                type: 'text',
                condition: 'Point of contact'
            },
            {
                Text: 'Trang tra cứu CSKH',
                type: 'text',
                condition: 'Lookup page'
            },
            {
                Text: 'Ngày tạo',
                type: 'date',
                condition: 'Date created'
            },
            {
                Text: 'Tình trạng',
                type: 'select',
                data: [],
                condition: 'status'
            },
            {
                Text: '',
                type: 'search',
                condition: 'name'
            }];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'name',
                label: 'Tên dịch vụ',
                name: 'name',
                type: 'text'
            },
            {
                id: 'unit_in_charge_of_business',
                label: 'Đơn vị chủ trì kinh doanh',
                name: 'unit_in_charge_of_business',
                type: 'text'
            },
            {
                id: 'Point of contact',
                label: 'Đầu mối liên hệ kinh doanh',
                name: 'Point of contact',
                type: 'text'
            },
            {
                id: 'Unit in charge of engineering',
                label: 'Đơn vị chủ trì kỹ thuật',
                name: 'Unit in charge of engineering',
                type: 'text'
            },
            {
                id: 'id5',
                label: 'Đầu mối liên hệ kỹ thuật',
                name: 'name5',
                type: 'text'
            },
            {
                id: 'Point of contact',
                label: 'Đầu mối liên hệ CSKH đối tác',
                name: 'Point of contact',
                type: 'text'
            },
            {
                id: 'Lookup page',
                label: 'Đường link tra cứu trang CSKH',
                name: 'Lookup page',
                type: 'text'
            },
            {
                id: 'id8',
                label: 'Thông tin HDSD dịch vụ',
                name: 'name8',
                type: 'file'
            },
            {
                id: 'id9',
                label: 'Ảnh dịch vụ',
                name: 'name8',
                type: 'img'
            }
        ];
    }

    public get arrayBtn(): Array<BtnGroupModel> {
        return [
            {
                class: 'mbf-btn-cancel',
                text: 'Hủy bỏ'
            }, {
                class: 'mbf-btn-save-note',
                text: 'Lưu nháp'
            },
            {
                class: 'mbf-btn-save',
                text: 'Lưu ngay'
            }
        ];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'mbf-btn-save-note',
                text: 'Thêm mới',
                type: 'create',
                icon: ''
            }
        ];
    }
    public get filterPortalAll(): Array<FilterModel> {
        return [
            {
                Text: 'Tên dịch vụ',
                type: 'text',
                condition: 'name'
            },
            {
                Text: 'Ngày tạo',
                type: 'date',
                condition: 'Date created'
            },

            {
                Text: '',
                type: 'search',
                condition: 'name'
            }];
    }
    

}
