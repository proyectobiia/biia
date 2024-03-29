import { Component, OnInit } from '@angular/core';
import { FirestoreAdminService } from 'src/app/services/firestore-admin.service';

@Component({
  selector: 'app-invierte',
  templateUrl: './invierte.component.html',
  styleUrls: ['./invierte.component.scss']
})
export class InvierteComponent implements OnInit {
  academiaList

  constructor(private afs : FirestoreAdminService) { }

  ngOnInit(): void {
    this.afs.getAcademias().subscribe(res => {
      this.academiaList = res
      console.log(this.academiaList.filter(academia => academia.id == "IulZhN4HnQsiUj9M1DQI"))
      }
    )
    window.scrollTo(0, 0)
    if(window.innerWidth >= 800){
      document.getElementById('invierteVideo').setAttribute("autoplay", "true")
    }
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
