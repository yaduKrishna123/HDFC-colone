import { Component } from '@angular/core';

@Component({
  selector: 'app-bodytwo',
  templateUrl: './bodytwo.component.html',
  styleUrls: ['./bodytwo.component.css']
})
export class BodytwoComponent {

  onDragMoved(event: any) {
    console.log(`Position: ${event.source.getFreeDragPosition().x}`);
  }
  

}
