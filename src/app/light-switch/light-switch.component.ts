import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/models/stat';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  darkModeEnabled: boolean = true;

  count: number = 0;
  stats: Stat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.count++;
    this.stats.push(new Stat(this.count, this.darkModeEnabled, new Date()));
  }

}
