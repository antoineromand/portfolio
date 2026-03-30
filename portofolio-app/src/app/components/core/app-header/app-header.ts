import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  public menu: { name: string, path: string, symbol: string }[] = [
    {name: "home", path: "/home", symbol: "grid_view"},
    {name: "projects", path: "/projects", symbol: "database"},
    {name: "blog", path: "/blog", symbol: "psychology"},
    {name: "contact", path: "/contact", symbol: "sensors"}
  ]
}
