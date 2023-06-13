import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects?: Array<Project>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects().slice(1);
  }

  toggleProjectDetails(id: number) {
    if (this.projects) {
      for (let i = 0; i < this.projects?.length; i++) {
        if (this.projects[i].id === id) {
          this.projects[i].showDetails = !this.projects[i].showDetails;
        }
        else {
          this.projects[i].showDetails = false;
        }
      }
    }
  }
}
