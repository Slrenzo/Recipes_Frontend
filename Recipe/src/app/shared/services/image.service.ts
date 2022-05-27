import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.converToBase64(file);
  }

  converToBase64(file: File) {
    const imageObs = new Observable((subscriber: Subscriber<string>) => {
      this.readFile(file, subscriber)
    })

    imageObs.subscribe((fileImg) => {
      return fileImg;
    })
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
