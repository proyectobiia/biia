import { Component, OnInit } from '@angular/core';
import { FirestoreAdminService } from 'src/app/services/firestore-admin.service';

@Component({
  selector: 'app-aprende',
  templateUrl: './aprende.component.html',
  styleUrls: ['./aprende.component.scss']
})
export class AprendeComponent implements OnInit {
  brokerList
  

  constructor(private afs : FirestoreAdminService) { }

  ngOnInit(): void {
    this.afs.getBrokers().subscribe(res => {
      this.brokerList = res
      }
    )
    if(window.innerWidth >= 800){
      document.getElementById('aprendeVideo').setAttribute("autoplay", "true")
    }
    window.scrollTo(0, 0)
  }

  config = {
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: false,
    initialSlide: 0,
    mousewheel: false,
    setWrapperSize: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    centeredSlides: false,
    loop: false,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    pagination: false,
    breakpoints: {
        // when window width is >= 320px
        1000: {
            slidesPerView: 3
        }
    }
  }

}
