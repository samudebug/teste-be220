import { Component, OnInit } from '@angular/core';
@Component({

  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  personalsData = {
    title: "Personal Online",
    cards: [
      {
        imageUrl: "../../assets/new.jpg",
        title: "Novo Treino"
      },
      {
        imageUrl: "../../assets/yoga.jpg",
        title: "Yoga"
      },
      {
        imageUrl: "../../assets/supino.jpg",
        title: "Supino"
      }
    ]
  }

  programsData = {
    title: "Programas",
    cards: [
      {
        imageUrl: "../../assets/supino.jpg",
        title: "Levantamento de peso"
      },
      {
        imageUrl: "../../assets/abdominal.jpg",
        title: "Abdominais"
      },
      {
        imageUrl: "../../assets/flexao.jpg",
        title: "Flexão"
      }
    ]
  }

  classesData = {
    title: "Conteúdos",
    cards: [
      {
        imageUrl: "../../assets/yoga.jpg",
        title: "Yoga 1"
      },
      {
        imageUrl: "../../assets/yoga.jpg",
        title: "Yoga 2"
      },
      {
        imageUrl: "../../assets/yoga.jpg",
        title: "Yoga 3"
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
