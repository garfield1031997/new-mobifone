import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root',
})
export class EmployeeService extends BaseApiService<any> {
    constructor(http: HttpClient) {
        super(http, '');
    }

    getEmployees(pageindex, pagesize): Observable<any> {
        return this.http.get<any>(`api/SalesManager/Admin/ListSeller?pageIndex=${pageindex}&pagesize=${pagesize}&Search=&Code=&FromDate=&ToDate=`).pipe(map((res: any) => res.data));
    }

    getEmployeeDetail(code): Observable<any> {
        return this.http.get<any>(`api/SalesManager/Admin/seller?code=${code}`).pipe(map((res: any) => res.data));
    }

}
