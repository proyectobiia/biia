import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('video').playbackRate = 1.3
    setTimeout(function(){document.getElementsByClassName('navbar')[0].classList.add('appearedNavbar')}, 300)
  }

  hasAppearedGuacamaya(){
    document.getElementsByClassName('animal-text-container')[0].classList.add('appearedText')
    document.getElementById('guacamayaImg').classList.add('appearedImg')
  }

  hasAppearedTortuga(){
    document.getElementById('tortugaText').classList.add('appearedTextLeft')
    document.getElementById('tortugaImg').classList.add('appearedImgRight')
  }

  hasAppearedJaguar(){
    document.getElementsByClassName('animal-text-container')[1].classList.add('appearedText')
    document.getElementById('jaguarImg').classList.add('appearedImg')
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

}
