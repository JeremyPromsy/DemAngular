import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
}

}
