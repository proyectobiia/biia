import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirestoreAdminService } from 'src/app/services/firestore-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-cuentas',
  templateUrl: './admin-cuentas.component.html',
  styleUrls: ['./admin-cuentas.component.scss']
})
export class AdminCuentasComponent implements OnInit {
  @ViewChild('fileInput') csvReader: any;
  fileValue:ElementRef;
  accountsList
  accountsFiltered
  pagosList
  pagosFiltered
  showBalanceModal
  previousPayments
  accountID
  accountBalance
  accountName
  accountRef
  userID
  showPagos = false
  users

  records: any[] = []; 

  constructor(private afs : FirestoreAdminService, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res
    })
    this.afs.getAccounts().subscribe(res => {
      this.accountsList = res.sort( this.compare );
      this.accountsList.forEach(account => {
        const user = this.users.find(user => user.id == account.userID)
        account.email = user.email
      });
      this.accountsFiltered = this.accountsList
    })
    this.afs.getPagos().subscribe((res:any) => {
      this.pagosList = res.sort( this.compareDate );
      this.pagosFiltered = this.pagosList
    })
    this.afs.getPreviousPayments().subscribe(res => {
      this.previousPayments = res
    })
  }

  filterList(searchTerm:string){
    this.accountsFiltered = this.accountsList.filter(function (el) {
      var name:string = el.name;
      var ref:string = el.accountID
      var time:string = el.time
      return name.toLowerCase().includes(searchTerm.toLowerCase()) || time.toLowerCase().includes(searchTerm.toLowerCase()) || ref.toLowerCase().includes(searchTerm.toLowerCase())
    });
  }

  filterPagos(searchTerm:string){
    this.pagosFiltered = this.pagosList.filter(function (el) {
      var name:string = el.user;
      var time:string = el.time
      var ref:string = el.userRef
      return name.toLowerCase().includes(searchTerm.toLowerCase()) || time.toLowerCase().includes(searchTerm.toLowerCase()) || ref.toLowerCase().includes(searchTerm.toLowerCase())
    });
  }

  compare( a, b ) {
    if(a.isActive && !b.isActive){
      return 1
    }if(!a.isActive && b.isActive){
      return -1
    }else{
      if(a.year > b.year){
        return -1
      }if(a.year < b.year){
        return 1
      }else{
        if(a.month > b.month){
          return -1
        }if(a.month < b.month){
          return 1
        }else{
          if(a.day > b.day){
            return -1
          }if(a.day < b.day){
            return 1
          }else{
            if(a.hour > b.hour){
              return -1
            }if(a.hour < b.hour){
              return 1
            }
          }
        }
      }
    }
  }

  compareDate(a,b){
    if(a.realDate>b.realDate) return -1
    if(a.realDate<=b.realDate)return 1
  }

  activateAccount(id){
    this.afs.activateAccount(id)
  }

  toggleEditModal(accountID,userID,accountBalance,accountName,accountRef){
    this.accountID = accountID
    this.accountBalance = accountBalance
    this.accountName = accountName
    this.accountRef = accountRef
    this.userID = userID
    this.showBalanceModal = !this.showBalanceModal;
  }

  saveBalance(id,accountBalance){
    this.afs.changeBalance(id,parseFloat(accountBalance))
    this.afs.createPago(this.accountName,this.userID,this.accountRef,parseFloat(this.accountBalance),accountBalance)
    this.showBalanceModal = !this.showBalanceModal;
  }

  togglePagos(element){
    if(element=='cuentas'){
      this.showPagos = false
    }else{
      this.showPagos = true
    }
    document.getElementsByClassName('chosen-tab')[0].classList.remove('chosen-tab')
    document.getElementById(element).classList.add('chosen-tab')
  }

  onFileChanged(event) {
    let data:any[] = []
    let files = event.target.files
    if(!this.isValidCSVFile(files[0])){
      window.alert('Por favor ingrese un archivo csv')
      this.fileReset()
      return
    }
    let input = event.target;  
    let reader = new FileReader();  
    reader.readAsText(input.files[0]);  

    reader.onload = () => {  
      let csvData = reader.result;  
      let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  

      let headersRow = this.getHeaderArray(csvRecordsArray);  

      this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  

      this.changeBalanceFromCSVRecords(this.records)
    }; 
  }

  changeBalanceFromCSVRecords(records){
    let invalidRecords:string = ""
    let account
    let duplicatePayments = false
    records.forEach(record => {
      account = this.accountsList.find(account => account.accountID == record.id)
      if(!account) {
        if(record.id!="Account")invalidRecords += ` ${record.id},`
        return
      }
      if(this.previousPayments.find(payment => payment.uid == record.id && payment.amount == record.amount)){
        duplicatePayments = true
        return
      }
      let payment = {
        uid: record.id,
        amount: record.amount
      }
      this.afs.createPreviousPayment(payment)
      this.afs.createPago(account.name,account.userID,account.accountID,account.balance,account.balance + parseFloat(record.amount))
      this.afs.changeBalance(account.id,account.balance + parseFloat(record.amount))
    })
    if(records.length>0){
      window.alert('Pagos registrados')
      if(invalidRecords!="")window.alert(`Las cuentas${invalidRecords} no fueron encontradas.` )
      if(duplicatePayments=true)window.alert('Se encontraron algunos pagos duplicados, no fueron registrados.')
      if(this.fileValue)this.fileValue.nativeElement.value = ""
      duplicatePayments = false
      return
    }
    window.alert('Error al importar, revise el archivo ingresado.')
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let currentRecord = (<string>csvRecordsArray[i]).split(',');  
      if (currentRecord.length == headerLength) {  
        let csvRecord: any = {id: '',amount: 0}
        csvRecord.id = currentRecord[0].trim();  
        csvRecord.amount = currentRecord[1].trim();
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }

  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }

  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }

  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  

}
