import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
  providedIn: 'root',
})
export class ContractService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'api/SalesManager/Admin/ListPolicy');
  }

  getContracts(pageindex, pagesize): Observable<any> {
    return this.http.get<any>(`api/SalesManager/Admin/ListPolicy?pageindex=${pageindex}&pagesize=${pagesize}`).pipe(map((res: any) => res.data));
  }

  getContractDetail(id, SellerCode): Observable<any> {
    return this.http.get<any>(`api/SalesManager/Admin/Policy?id=${id}&SellerCode=${SellerCode}`).pipe(map((res: any) => res.data));
  }

}
