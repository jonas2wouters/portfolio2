import { Injectable } from '@angular/core';
import { ImageCarrousel } from '../models/imageCarrousel';

@Injectable({
  providedIn: 'root'
})
export class ImageCarrouselService {

  constructor() { }

  imageCarrouselStage: Array<ImageCarrousel> = [
    {
      id: 0,
      link: "assets/images/stage/opening.jpg",
      description: ["Om een barrière te creëren tussen de applicatie die de gebruikers bijna dagelijks zullen zien en de Year In Review heb ik samen met Viktor en Sander enkele animaties gemaakt met in het midden een GIF van 25 Jaar Axxes. "],
      isYTLink: false
    },
    {
      id: 1,
      link: "assets/images/stage/eventIntro.jpg",
      description: ["Elk getoond evenement bestaat uit 2 delen. Eerst zal de gebruiker een inleidende slide krijgen met één willekeurige foto op. We hebben besloten om elk evenement in te leiden aangezien het anders misschien onduidelijk zou zijn over welk evenement er op dat moment foto’s getoond worden."],
      isYTLink: false
    },
    {
      id: 2,
      link: "assets/images/stage/eventImages.jpg",
      description: ["De inleidende slide wordt gevolgd door een slide met maximum 3 foto’s van deze persoon op het desbetreffende evenement."],
      isYTLink: false
    },
    {
      id: 3,
      link: "assets/images/stage/25Jaar.jpg",
      description: ["Dit jaar is in vergelijking met de andere jaren licht verschillend. Axxes is namelijk 25 jaar geworden. Om dit te vieren hebben we dit jaar een extra slide voorzien. Op deze slide kan een gebruiker al zijn foto’s zien waarin het getagd is vanaf dat deze persoon is begonnen bij Axxes."],
      isYTLink: false
    },
    {
      id: 4,
      link: "assets/images/stage/share.jpg",
      description: ["Voor marketing was het belangrijk dat de video zo vaak mogelijk gedeeld werd. Om te voorkomen dat de gebruiker de video niet deelt omdat er 1 deel is dat hij niet wilt delen met de rest hebben wij gekozen om de video samen te stellen op het moment dat de gebruiker deze wilt delen."],
      isYTLink: false
    },
    {
      id: 5,
      link: "video",
      description: [],
      isYTLink: true
    },
    {
      id: 6,
      link: "app",
      description: ["We hebben ervoor gekozen om de opgehaalde data via een WebView component van React Native te laten zien. Dit component geeft html weer in een Native View. Dit was voor ons de makkelijkste manier om de verschillende pagina’s te laten zien op een logische manier, met wederzijdse communicatie tussen de Year In Review” en de applicatie."],
      isYTLink: true
    }
  ]

  public getImageCarrouselStage(): Array<ImageCarrousel> {
    return this.imageCarrouselStage;
  }
}
