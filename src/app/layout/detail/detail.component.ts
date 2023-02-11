import { Component } from '@angular/core';
import { Attraction } from 'src/app/model/attraction';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  data: Attraction | undefined;
  isDetail: boolean = false;

  loadDetail(attraction: any): void {
    this.isDetail = true;
    this.data = attraction;
  }

  closeDetail(): void {
    this.isDetail = false;
  }
}
