import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images!: string;

  readFile(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve) => {
      const filereader = new FileReader();
      filereader.onload = () => resolve(filereader.result)
      filereader.readAsDataURL(file)
    });
  }
}
