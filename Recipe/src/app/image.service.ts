import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images!: string;

  converToBase64(file: File): string  {
    const imageObs = new Observable((subscriber: Subscriber<string>) => {
      this.readFile(file, subscriber)
    })

    imageObs.subscribe(fileImg => {
      this.images = fileImg
    })

    return this.images;
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
  }
}
