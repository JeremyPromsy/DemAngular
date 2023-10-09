import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
        id: 1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0, 
        location: 'Bordeaux'
      },
      {
        id: 2,
        title: 'Golden',
        description: 'Le beau chien !',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/1200px-Golden_retriever_stehfoto.jpg',
        createdDate: new Date(),
        snaps: 3
      },
      { 
        id: 3,
        title: 'Stade fançais',
        description: 'Le club de rugby!',
        imageUrl: 'https://www.leparisien.fr/resizer/zgoIk3P7kwhdnAxxymI2TDqsBU4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/AADCJ72SUVBJDL6T56PY3V6WP4.jpg',
        createdDate: new Date(),
        snaps: 7
      }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: string): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}