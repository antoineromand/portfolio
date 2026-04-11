import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage implements OnInit {
  actualPosition?: number;
  maxPosition?: number;
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.actualPosition = this.route.snapshot.data['actualPosition'];
    this.maxPosition = this.route.snapshot.data['maxPosition'];
  }
}
