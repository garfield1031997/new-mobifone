import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  fakeData = [
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: true,
    },
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    },
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: true
    },
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    },
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    }, {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    }, {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    }, {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    },
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    },
    {
      link: 'https://mobifone3g.info/huong-dan-goi-tong-dai-cham-soc-khach-hang-mobifoneg%E8Di%20%C2018001090',
      check: false
    },

  ]
  checkFalse: number;
  checkTrue: number;
  constructor() { }

  ngOnInit(): void {
    this.checkFalse = this.fakeData.filter(x => x.check === false).length;
    this.checkTrue = this.fakeData.filter(x => x.check === true).length;
    
  }

}
