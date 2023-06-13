import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{
  public birthDate = '01/08/2001';
  public age = 22;

  ngOnInit(): void {
    this.checkAge(this.birthDate)
  }

  public checkAge(date: any): void{
    if (date) {
      var timeDiff = Math.abs(Date.now() - new Date(date).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

}
