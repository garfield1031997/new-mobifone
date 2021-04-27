import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class ReportModel {

    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Thời gian',
                type: 'datePicker',
                condition: 'tg'
            },
        ];
    }

}
