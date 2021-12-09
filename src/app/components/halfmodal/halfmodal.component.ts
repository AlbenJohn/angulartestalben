import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { HalfmodalService } from './halfmodal.service';

@Component({
  selector: 'half-modal',
  templateUrl: './halfmodal.component.html',
  styleUrls: ['./halfmodal.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HalfmodalComponent implements OnInit {


  @Input() id: string;
  @Input() cssStyles:any ;
  private element: any;

  constructor(private modalService: HalfmodalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      // ensure id attribute exists
      if (!this.id) {
          console.error('modal must have an id');
          return;
      }

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close modal on background click
      this.element.addEventListener('click', el => {
          if (el.target.className === 'half-modal') {
            //  this.close();
          }
      });

      // add self (this modal instance) to the modal service so it's accessible from controllers
      this.modalService.add(this);

      // $(document).ready(()=>{
      //     $('#draggable').draggable();

      // })

  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  // open modal
  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('half-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('half-modal-open');
  }

}
