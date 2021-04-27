import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class SupportModel {
    // EmployeeId: number;
    // WorkingYear: number;
    // WorkingMonth: number;
    // CategoryId: number;
    // Title: string;
    // Amount: number;
    // Type: number;

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'id',
                name: 'STT',
                width: 100,
                type: 'text'
            },
            {
                id: 'stb',
                name: 'Số thuê bao',
                width: 200,
                type: 'text'
            },
            {
                id: 'mpa',
                name: 'Mạng phản ánh',
                width: 200,
                type: 'text',
            },
            {
                id: 'npt',
                name: 'Nguồn phát tán',
                width: 200,
                type: 'text',
            },
            {
                id: 'ndpa',
                name: 'Nội dung phản ánh',
                width: 200,
                type: 'text',
                textAlign: 'start'
            },
            {
                id: 'ttdnc',
                name: 'Trạng thái DNC',
                width: 200,
                type: 'text',
            },
            {
                id: 'tgdnc',
                name: 'Thời gian đăng ký DNC',
                width: 200,
                type: 'date',
            },
            {
                id: 'tgpa',
                name: 'Thời gian phản ánh',
                width: 200,
                type: 'date'
            },
            {
                id: 'lpa',
                name: 'Loại phản ánh',
                width: 200,
                type: 'text'
            },
            {
                id: 'lnpt',
                name: 'Loại nguồn phát tán',
                width: 200,
                type: 'text'
            },
            {
                id: 'ttxl',
                name: 'Tình trạng xử lý',
                width: 200,
                type: 'text-color',
                color: '#E00000'
            },
            {
                id: 'ndxl',
                name: 'Nội dung xử lý',
                width: 200,
                type: 'text'
            },
            {
                id: 'bc',
                name: 'Bằng chứng',
                width: 200,
                type: 'text'
            },
            
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
                Text: 'Nguồn phát tán',
                type: 'text',
                data: [],
                condition: 'npt'
            },
            {
                Text: 'Nội dung phản ánh',
                type: 'text',
                data: [],
                condition: 'ndpa'
            },
            {
                Text: 'Trạng thái',
                type: 'select',
                data: [],
                condition: 'ttdnc'
            },
            {
                Text: 'Thời gian đăng ký DNC',
                type: 'select',
                condition: 'tgdnc'
            },
            {
                Text: 'Thời gian phản ánh',
                type: 'date',
                data: [],
                condition: 'tgpa'
            },
            {
                Text: 'Tình trạng xử lý',
                type: 'select',
                data: [],
                condition: 'ttxl'
            },
            {
                Text: '',
                type: 'search',
                condition: 'stb'
            },];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'mbf-btn-save-note',
                text: 'Import',
                type: 'import',
                icon: '',
                service: 'support'
            }
        ];
    }
}
