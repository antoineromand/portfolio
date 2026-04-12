import {Component, inject, OnInit} from '@angular/core';
import {Project, ProjectService} from '../../services/project-service';
import {ProjectComponent} from '../../components/reusable/project/project';

@Component({
  selector: 'projects-page',
  imports: [ProjectComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsPage implements OnInit {
  service = inject(ProjectService);
  projects: Project[] = [];

  ngOnInit() {
    this.projects = this.service.getProjects();
  }
}
