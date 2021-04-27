import { BtnGroupModel } from "./base/btngroup.model";
import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class CSKHModel {
    STT: number;
    Service: string;
    CSKH: string;
    Status: string;
    Tech: string;
    Date: string;
    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'number'
            },
            {
                id: 'dvcskh',
                name: 'Dịch vụ CSKH',
                width: 200,
                type: 'text'
            },
            {
                id: 'cskh',
                name: 'Trang CSKH',
                width: 500,
                type: 'text'
            },
            {
                id: 'tt',
                name: 'Tình trạng',
                width: 200,
                type: 'text'
            },
            {
                id: 'dvkt',
                name: 'Phát triển dịch vụ',
                width: 100,
                type: 'text',
            },
            {
                id: 'date',
                name: 'Ngày quét gần nhất',
                width: 100,
                type: 'text',
            },

        ];
    }
    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Trang CSKH',
                type: 'text',
                data: [],
                condition: 'cskh'
            },
            {
                Text: 'Tình trạng',
                type: 'text',
                data: [],
                condition: 'tt'
            },
            {
                Text: 'KTKT & PTDV',
                type: 'text',
                data: [],
                condition: 'dvkt'
            },
            {
                Text: 'Ngày quét',
                type: 'date',
                data: [],
                condition: 'date'
            },
            {
                Text: '',
                type: 'search',
                condition: 'tt'
            }];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'mbf-btn-save-note',
                text: 'Thêm mới',
                type: 'create',
                icon: '',
                service: "cskh"                
            },
            {
                class: 'mbf-btn-save-note',
                text: 'Quét',
                type: 'scan',
                icon: '',
            },
            {
                class: 'mbf-btn-save-note',
                text: 'Import',
                type: 'import',
                icon: '',
                service: "cskh"                
            }
        ];
    }
    public get collumsPing(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'number'
            },
            {
                id: 'dvcskh',
                name: 'Dịch vụ CSKH',
                width: 200,
                type: 'text'
            },
            {
                id: 'cskh',
                name: 'Trang CSKH',
                width: 500,
                type: 'text'
            },
            {
                id: 'tt',
                name: 'Tình trạng',
                width: 200,
                type: 'text'
            },
            {
                id: 'ktkt',
                name: 'KTKT & PTDV',
                width: 100,
                type: 'text',
            },
            {
                id: 'tgqgn',
                name: 'Thời gian quét gần nhất',
                width: 100,
                type: 'text',
            },

        ];
    }
    public get arrayBtn(): Array<BtnGroupModel> {
        return [
            {
                class: 'mbf-btn-cancel',
                text: 'Hủy bỏ'
            }
        ];
    }
    public get detail(): Array<CreateModel> {
        return [
            {
                id: 'dvcskh',
                label: 'Tên dịch vụ',
                name: 'dvcskh',
                type: 'text'
            },
            {
                id: 'cskh',
                label: 'Trang CSKH',
                name: 'cskh',
                type: 'text'
            },
            {
                id: 'tt',
                label: 'Tình trạng',
                name: 'tt',
                type: 'text'
            },
            {
                id: 'ktkt',
                label: 'KTKT & PTDV',
                name: 'ktkt',
                type: 'text'
            },
            {
                id: 'tgqgn',
                label: 'Thời gian quét gần nhất',
                name: 'tgqgn',
                type: 'text'
            },
            {
                id: 'lsq',
                label: 'Lịch sử quét',
                name: 'lsq',
                type: 'list'
            },
          
        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'dvcskh',
                label: 'Dịch vụ CSKH',
                name: 'dvcskh',
                type: 'text'
            },
            {
                id: 'link',
                label: 'Đường link tra cứu CSKH',
                name: 'link',
                type: 'text'
            },

        ];
    }
    
}
