import {Injectable} from '@angular/core';
import data from "../../projects.json";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  img: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Project[] {
    return data.projects;
  }
}
