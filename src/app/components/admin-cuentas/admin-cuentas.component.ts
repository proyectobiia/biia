import { Component, OnInit } from '@angular/core';
import { FirestoreAdminService } from 'src/app/services/firestore-admin.service';

@Component({
  selector: 'app-admin-cuentas',
  templateUrl: './admin-cuentas.component.html',
  styleUrls: ['./admin-cuentas.component.scss']
})
export class AdminCuentasComponent implements OnInit {
  accountsList
  accountsFiltered
  pagosList
  pagosFiltered
  showBalanceModal
  accountID
  accountBalance
  accountName
  accountRef
  userID
  showPagos = false

  constructor(private afs : FirestoreAdminService) { }

  ngOnInit(): void {
    this.afs.getAccounts().subscribe(res => {
      this.accountsList = res.sort( this.compare );
      this.accountsFiltered = this.accountsList
    })
    this.afs.getPagos().subscribe(res => {
      this.pagosList = res.sort( this.compare );
      this.pagosFiltered = this.pagosList
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

}
