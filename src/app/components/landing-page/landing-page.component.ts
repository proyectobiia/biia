import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public firebaseAuth : AngularFireAuth) {
    
   }

  ngOnInit(): void {
    document.querySelector('video').playbackRate = 1.3
    setTimeout(function(){document.getElementsByClassName('navbar')[0].classList.add('appearedNavbar')}, 300)
    window.scrollTo(0, 0)
    if(window.innerWidth >= 800){
      document.getElementById('myVideo').setAttribute("autoplay", "true")
    }
  }


  hasAppearedTortuga(){
    document.getElementById('tortugaText').classList.add('appearedTextLeft')
    document.getElementById('tortugaImg').classList.add('appearedImgRight')
  }

  hasAppearedGuacamaya(){
    document.getElementsByClassName('animal-text-container')[0].classList.add('appearedText')
    document.getElementById('guacamayaImg').classList.add('appearedImg')
  }

  hasAppearedJaguar(){
    document.getElementById('jaguar-text').classList.add('appearedTextLeft')
    document.getElementById('jaguarImg').classList.add('appearedImgRight')
  }


  scroll(id:string) {
    const element = document.getElementById(id);
    const offset = 75;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  scrollStart(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
