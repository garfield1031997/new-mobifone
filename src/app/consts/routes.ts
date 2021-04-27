export enum Routes {
    LOGIN = '/login',
    HOME = '/pages/home',
    EMAIL = '/pages/email',
    REPORT = '/pages/report',
    PORTAL = '/pages/portal',
    SUPPORT_CTKV = '/pages/support-ctkv',
    SUPPORT_VNCERT = '/pages/support-vncert',
    CSKH = '/pages/cskh',
    SETTING = '/pages/setting',

}

export const RoutesLink = [
    {
        path: Routes.HOME,
        name: 'Trang chủ',
        check: 'home',
        show: false,
        icon: 'assets/svg/icon-home.svg',
        childrent: []
    },
    {
        path: Routes.PORTAL,
        name: 'Cổng thông tin',
        check: 'portal',
        show: false,
        icon: 'assets/svg/icon-port.svg',
        childrent: [
            {
                path: '/pages/portal/all',
                name: 'Tất cả',
                check: 'all',
                show: false,
                icon: 'assets/svg/icon-support-ctkv.svg',
                childrent: []
            },
            {
                path: '/pages/portal/sent',
                name: 'Gửi đi',
                check: 'sent',
                show: false,
                icon: 'assets/svg/icon-support-ctkv.svg',
                childrent: []
            },
            {
                path: '/pages/portal/internal',
                name: 'Nội bộ',
                check: 'internal',
                show: false,
                icon: 'assets/svg/icon-support-ctkv.svg',
                childrent: []
            },
        ]

        
    },
    {
        path: Routes.SUPPORT_CTKV,
        name: 'Hỗ trợ CTKV',
        check: 'support-ctkv',
        show: false,
        icon: 'assets/svg/icon-support-ctkv.svg',
        childrent: []
    },
    {
        path: Routes.SUPPORT_VNCERT,
        name: 'Hỗ trợ VNCERT',
        check: 'support-vncert',
        show: false,
        icon: 'assets/svg/icon-VNCERT.svg',
        childrent: []
    },
    {
        path: Routes.CSKH,
        name: 'Trang CSKH tập trung',
        check: 'cskh',
        show: false,
        icon: 'assets/svg/icon-cskh.svg',
        childrent: [{
            path: '/pages/cskh/total',
            name: 'Chăm sóc tập trung',
            check: 'total',
            show: false,
            icon: 'assets/svg/icon-cskh.svg',
            childrent: []
        },
        {
            path: '/pages/cskh/ping',
            name: 'Chăm sóc dịch vụ',
            check: 'ping',
            show: false,
            icon: 'assets/svg/icon-cskh.svg',
            childrent: []
        },]
    },
    {
        path: Routes.REPORT,
        name: 'Báo cáo',
        check: 'report',
        show: false,
        icon: 'assets/svg/icon-report.svg',
        childrent: [
            {
                path: '/pages/report/report-portal',
                name: 'Cổng thông tin',
                check: 'report-portal',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            },
            {
                path: '/pages/report/report-ctkv',
                name: 'Hỗ trợ CTKV',
                check: 'report-ctkv',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            },
            {
                path: '/pages/report/report-vncert',
                name: 'Hỗ trợ VNCERT',
                check: 'report-vncert',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            },
            {
                path: '/pages/report/report-cskh',
                name: 'Trang CSKH tập trung',
                check: 'report-cskh',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            }
        ]
    },
    {
        path: Routes.SETTING,
        name: 'Cài đặt',
        check: 'setting',
        show: false,
        icon: 'assets/svg/icon-setting.svg',
        childrent: [
            {
                path: '/pages/setting/general',
                name: 'Cài đặt chung',
                check: 'general',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            },
            {
                path: '/pages/setting/email',
                name: 'Cài đặt gửi mail',
                check: 'email',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            },
            {
                path: '/pages/setting/auth',
                name: 'Phân quyền',
                check: 'auth',
                show: false,
                icon: 'assets/svg/icon-cskh.svg',
                childrent: []
            },
        ]
    },
    
];
