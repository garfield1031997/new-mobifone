import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      // {
      //   path: 'portal',
      //   loadChildren: () =>
      //   import('./portal/portal.module').then((m) => m.PortalModule),
      // },
      // {
      //   path: 'support-ctkv',
      //   loadChildren: () =>
      //     import('./support-ctkv/ctkv.module').then((m) => m.CtkvModule),
      // },
      // {
      //   path: 'support-vncert',
      //   loadChildren: () =>
      //     import('./support/support.module').then((m) => m.SupportModule),
      // },
      // {
      //   path: 'cskh',
      //   loadChildren: () =>
      //     import('./cskh/cskh.module').then((m) => m.CSKHModule),
      // },
      // {
      //   path: 'report',
      //   loadChildren: () =>
      //     import('./report/report.module').then((m) => m.ReportModule),
      // },
      // {
      //   path: 'setting',
      //   loadChildren: () =>
      //     import('./setting/setting.module').then((m) => m.SettingModule),
      // },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }

    ],
  },
];
