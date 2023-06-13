import { Component, AfterViewInit, Input } from '@angular/core';
import { ImageCarrousel } from '../shared/models/imageCarrousel';

@Component({
  selector: 'app-image-carrousel',
  templateUrl: './image-carrousel.component.html',
  styleUrls: ['./image-carrousel.component.scss']
})
export class ImageCarrouselComponent implements AfterViewInit {
  @Input() images?: Array<ImageCarrousel> = [];

  index: number = 0;
  imagesItems?: any = [];
  amountImages: number = 0;

  ngAfterViewInit(): void {
    this.adjustIndex(0);
    console.log(this.imagesItems);
  }

  adjustIndex(num: number): void {
    this.imagesItems = document.getElementsByClassName("item")

    this.amountImages = this.imagesItems.length;
    for (let i = 0; i < this.amountImages; i++) {
      console.log(i)
      this.imagesItems[i].classList.add("hide");
    }

    this.index += num;

    if (this.index < 0) this.index = this.amountImages - 1;
    if (this.index >= this.amountImages) this.index = 0;

    this.imagesItems[this.index].classList.remove("hide")
  }
}
