import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  title = 'Pipes';
  documentation = 'https://angular.io/guide/pipes';

  public currentTime: Date;

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    },1000);
  }
}
