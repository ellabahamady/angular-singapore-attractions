import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Attraction } from '../model/attraction';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = "assets/js/data.json";  // JSON data file

  constructor(protected httpClient: HttpClient) { }

  getData(onSuccess: (data: any) => void): any {
    this.httpClient.get<Attraction>(this.dataUrl)
    .subscribe(
      (resp: any) => {
        onSuccess(resp)
      }
    )
  }
}
