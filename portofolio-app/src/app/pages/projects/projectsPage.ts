import {Component, inject, OnInit} from '@angular/core';
import {Project, ProjectService} from '../../services/project-service';
import {ProjectComponent} from '../../components/reusable/project/project';
import {AppProjectsFilter} from '../../components/core/app-projects-filter/app-projects-filter';

@Component({
  selector: 'projects-page',
  imports: [ProjectComponent, AppProjectsFilter],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsPage implements OnInit {
  service = inject(ProjectService);
  projects: Project[] = [];
  filters: { query: string, orderById: string } = {query: "", orderById: "ASC"};
  ngOnInit() {
    this.projects = this.service.getProjects();
  }

  getFilters(filters: { query: string, orderById: string }) {
    this.filters = filters;
  }
}
