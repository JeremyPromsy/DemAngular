import { FaceSnap } from '../models/face-snaps.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void { 
      this.faceSnaps = [
        
    ]
  }
}
