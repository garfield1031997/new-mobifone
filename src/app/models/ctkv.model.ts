import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class CtkvModel {
    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'id',
                name: 'STT',
                width: 100,
                type: 'number'
            },
            {
                id: 'stb',
                name: 'Số thuê bao',
                width: 100,
                type: 'text'
            },
            {
                id: 'ltb',
                name: 'Loại thuê bao',
                width: 100,
                type: 'text',
            },
            {
                id: 'lkh',
                name: 'Loại khách hàng',
                width: 200,
                type: 'text',
                textAlign: "start"
            },
            {
                id: 'information_entered',
                name: 'Thông tin nhập',
                width: 200,
                type: 'text',
            },
            {
                id: 'processing_information',
                name: 'Thông tin xử lý',
                width: 200,
                type: 'text',
            },
            {
                id: 'number_of_reflections',
                name: 'Số lần phản ánh',
                width: 150,
                type: 'number',
            },
            {
                id: 'status',
                name: 'Trạng thái',
                width: 100,
                type: 'text'
            },
            {
                id: 'address',
                name: 'Địa chỉ',
                width: 200,
                type: 'text'
            },
            {
                id: 'city',
                name: 'Thành phố',
                width: 100,
                type: 'text'
            },
            {
                id: 'district',
                name: 'Quận',
                width: 150,
                type: 'text'
            },
            {
                id: 'wark',
                name: 'Phường',
                width: 150,
                type: 'text'
            },
            {
                id: 'status2',
                name: 'Tình trạng',
                width: 100,
                type: 'text-color',
                color: '#E00000'
            }
        ];
    }
    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Số thuê bao',
                type: 'text',
                condition: 'stb'
            },
            {
                Text: 'Loại thuê bao',
                type: 'select',
                data: [],
                condition: 'ltb'
            },
            {
                Text: 'Loại khách hàng',
                type: 'select',
                data: [],
                condition: 'lkh'
            },
            {
                Text: 'Trạng thái',
                type: 'select',
                data: [],
                condition: 'status'
            },
            {
                Text: 'Địa chỉ',
                type: 'text',
                condition: 'address'
            },
            {
                Text: 'Thành phố',
                type: 'select',
                data: [],
                condition: 'city'
            },
            {
                Text: 'Quận',
                type: 'select',
                data: [],
                condition: 'district'
            },
            {
                Text: 'Phường',
                type: 'select',
                data: [],
                condition: 'wark'
            },
            {
                Text: 'Tình trạng',
                type: 'select',
                data: [],
                condition: 'status2'
            },
            {
                Text: '',
                type: 'search',
                condition: "stb"
            },];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'mbf-btn-save-note',
                text: 'Import',
                type: 'import',
                icon: '',
                service: 'ctkv',
            }
        ];
    }
}
