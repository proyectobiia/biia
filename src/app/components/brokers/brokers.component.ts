import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreAdminService } from 'src/app/services/firestore-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent implements OnInit {
  brokerList
  showAddAccount: boolean = false;
  showAddExistingAccount: boolean = false;
  showBrokerModal: boolean = false;
  brokerID;
  brokerName;
  brokerPage;
  brokerPath;
  brokerRef;
  brokerEmail;
  accountNumber = "";
  accountEmail;
  userName;
  userID;
  userMail;
  accountSubject;
  mailBody;
  checkbox1Checked = false
  checkbox2Checked = false
  errorText = "";

  constructor(public firebaseAuth : AngularFireAuth, private firestore : FirestoreAdminService, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.firestore.getBrokers().subscribe(res =>{
      this.brokerList = res
    })
    this.firebaseAuth.currentUser.then(user =>{
      this.userID = user.uid;
      this.userMail = user.email;
      this.userService.getUserById(user.uid).subscribe(res => {
        this.userName = res.name
      })
    })
  }

  toggleExistingBrokerAccount(){
    this.showAddExistingAccount = true
    this.showBrokerModal = false
    this.errorText = ""
  }

  toggleNewBrokerAccount(){
    this.showAddAccount = true
    this.showBrokerModal = false
    this.errorText = ""
  }

  toggleAddAccount(){
    this.brokerID = "";
    this.brokerName = "";
    this.brokerPage = "";
    this.brokerPath = "";
    this.brokerRef = "";
    this.brokerEmail = "";
    this.showAddAccount = false
    this.showAddExistingAccount = false
    this.checkbox1Checked = false
    this.checkbox2Checked = false
    this.errorText = ""
  }

  toggleBrokerModal(id,name,page,path,ref,email){
    this.showBrokerModal = !this.showBrokerModal;
    this.brokerID = id;
    this.brokerName = name;
    this.brokerPage = page;
    this.brokerPath = path;
    this.brokerRef = ref;
    this.brokerEmail = email;
    this.accountSubject =  `Account ${this.brokerName} change to BIIA`
    this.mailBody = `
Dear ${this.brokerName},

Could you put my following ${this.brokerName} Broker account under BIIA IB, can you make the change as soon as possible? this issue is quite urgent for me. 

This issue is quite urgent for me, so please make this change as soon as possible. My account details and referral ID are listed below. 

Account ID: ${this.accountNumber}
Referral ID: ${this.brokerRef}

I appreciate your prompt action to resolve my issue.

Thanks and kind regards,
${this.userName}.`
  }

  toggleCheckBox1(){
  }

  toggleCheckBox2(){
      this.checkbox2Checked = !this.checkbox2Checked
      if(this.checkbox2Checked){
        document.getElementById('step-2-checkbox').classList.add('checked')
        document.getElementById('step-3').classList.remove('disabled')
      }else{
        document.getElementById('step-2-checkbox').classList.remove('checked')
        document.getElementById('step-3').classList.add('disabled')
      }
  }

  changeAccount(value){
    this.accountNumber = value
    this.mailBody = `
Dear ${this.brokerName},

Could you put my following ${this.brokerName} Broker account under BIIA IB, can you make the change as soon as possible? this issue is quite urgent for me. 

This issue is quite urgent for me, so please make this change as soon as possible. My account details and referral ID are listed below. 

Account ID: ${this.accountNumber}
Referral ID: ${this.brokerRef}

I appreciate your prompt action to resolve my issue.

Thanks and kind regards,
${this.userName}.`
  }

  createAccount(userID,userName,accountID,brokerName,brokerPath){
    if(accountID != ""){
      this.firestore.sendBrokerEmail(this.brokerEmail, this.accountSubject,this.mailBody,this.userMail);
      this.userService.createAccount(userID,userName,accountID,brokerName,brokerPath)
      this.showAddAccount = false
    }else{
      this.errorText = "Por favor introduce un número de cuenta."
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  linkAccount(){
    if(this.accountNumber != ""){
    this.userService.createAccount(this.userID,this.userName,this.accountNumber,this.brokerName,this.brokerPath)
    this.showAddExistingAccount = false
    }else{
      this.errorText = "Por favor introduce un número de cuenta."
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if(charCode == 46) return true
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
