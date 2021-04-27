import { CreateModel } from "./base/create.model";

export class SettingSendEmailModel {
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'name',
                label: 'Tiêu đề email gửi',
                name: 'name',
                type: 'text'
            },
            {
                id: 'unit_in_charge_of_business',
                label: 'Nội dung',
                name: 'unit_in_charge_of_business',
                type: 'htmlText'
            },
            {
                id: 'Point of contact',
                label: 'Địa chỉ email nhận',
                name: 'Point of contact',
                type: 'text'
            },
            {
                id: 'Unit in charge of engineering',
                label: 'Địa chỉ email nhận CC',
                name: 'Unit in charge of engineering',
                type: 'text'
            },
            {
                id: 'id5',
                label: 'Địa chỉ email nhận BCC',
                name: 'name5',
                type: 'text'
            }
        ];
    }
}
