import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stat } from 'src/models/stat';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  stats: Stat[];

  statsAsJson: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  open(content) {
    this.statsAsJson = JSON.stringify(this.stats);
   
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', backdrop: 'static' });
  }


}
