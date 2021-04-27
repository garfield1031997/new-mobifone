import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-form-upload',
    templateUrl: './form-upload.component.html',
    styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {
    @Input() data: any;
    @Output() callback = new EventEmitter<any>();
    constructor(
        public dialogRef: MatDialogRef<any>,
    ) { }

    dataImport = [];
    exportContacts = [];
    ngOnInit(): void {
    }

    arrayBuffer: any;
    checkError = false;
    file: File;
    incomingfile(event) {
        console.log(event);

        this.file = event.target.files[0];
        this.checkError = false;
    }

    Upload() {
        let fileReader = new FileReader();
        if (this.file) {
            fileReader.onload = (e) => {
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                var arr = new Array();
                for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");
                var workbook = XLSX.read(bstr, { type: "binary" });
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
                this.callback.emit(this.dataImport);
                this.importData(this.dataImport);
            }
            fileReader.readAsArrayBuffer(this.file);
        }
        else {
            this.checkError = true;
        }
    }

    importData(data) {
        this.dialogRef.close(data);
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
