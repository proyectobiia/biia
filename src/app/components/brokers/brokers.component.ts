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

  constructor(public firebaseAuth : AngularFireAuth, private firestore : FirestoreAdminService, private userService: UserService) { 
  }

  changeBroker(id,name,page,path,ref,email){
    this.brokerID = id;
    this.brokerName = name;
    this.brokerPage = page;
    this.brokerPath = path;
    this.brokerRef = ref;
    this.brokerEmail = email;
    this.showAddAccount = true
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

  toggleAddAccount(){
    this.brokerID = "";
    this.brokerName = "";
    this.brokerPage = "";
    this.brokerPath = "";
    this.brokerRef = "";
    this.brokerEmail = "";
    this.showAddAccount = false
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

  toggleCheckBox1(){
    this.checkbox1Checked = !this.checkbox1Checked
    if(this.checkbox1Checked){
      document.getElementById('step-1-checkbox').classList.add('checked')
      document.getElementById('step-2').classList.remove('disabled')
      document.getElementById('cuenta').removeAttribute('disabled')
    }else{
      document.getElementById('step-1-checkbox').classList.remove('checked')
      document.getElementById('step-2').classList.add('disabled')
      document.getElementById('cuenta').setAttribute('disabled', 'true')
      if(this.checkbox2Checked){
        this.checkbox2Checked = !this.checkbox2Checked
        document.getElementById('step-2-checkbox').classList.remove('checked')
        document.getElementById('step-3').classList.add('disabled')
      }
    }
  }

  toggleCheckBox2(){
    if(this.checkbox1Checked){
      this.checkbox2Checked = !this.checkbox2Checked
      if(this.checkbox2Checked){
        document.getElementById('step-2-checkbox').classList.add('checked')
        document.getElementById('step-3').classList.remove('disabled')
      }else{
        document.getElementById('step-2-checkbox').classList.remove('checked')
        document.getElementById('step-3').classList.add('disabled')
      }
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
    this.firestore.sendBrokerEmail(this.brokerEmail, this.accountSubject,this.mailBody,this.userMail);
    this.userService.createAccount(userID,userName,accountID,brokerName,brokerPath)
    this.showAddAccount = false
  }

}
