import { ImageCarrousel } from "./imageCarrousel";
import { Links } from "./links";

export class Project {
  id: number = 0;
  name: string = "";
  functions: Array<string> = [""];
  text: Array<string> = [""];
  links?: Array<Links>;
  images?: Array<ImageCarrousel>
  tasks: Array<String> = [""];
  skills: Array<String> = [""];
  result: string = "";
  picture: string = "";
  showDetails: boolean = false;
}
