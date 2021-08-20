import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
 
  data = {
    name: "Leonardo Santos",
    level: "Nível Roxo"
  }

  constructor() { }

  ngOnInit() {}

}
