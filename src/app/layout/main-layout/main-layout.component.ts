import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/utils/animations/fader.animation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    // <-- add your animations here
    fader,
  ],
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;

  dataNav = {
    list: [
      {
        icon: 'assets/img/nav/ic-account.svg',
        name: 'Danh sách nhân viên bán hàng',
        linkURL: 'employee',
      },
      {
        icon: 'assets/img/nav/recommendation.svg',

        name: 'Danh sách hợp đồng',
        linkURL: 'contract',
      },
      {
        icon: 'assets/img/nav/analystics.svg',

        name: 'Cấu hình hoa hồng',
        linkURL: 'setting',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
