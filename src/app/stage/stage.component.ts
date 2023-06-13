import { Component, OnInit } from '@angular/core';
import { ImageCarrousel } from '../shared/models/imageCarrousel';
import { ImageCarrouselService } from '../shared/services/image-carrousel.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  imagesStage?: Array<ImageCarrousel>;

  constructor(private imageCarrouselService: ImageCarrouselService) { }

  ngOnInit(): void {
    this.imagesStage = this.imageCarrouselService.getImageCarrouselStage();
  }
}
