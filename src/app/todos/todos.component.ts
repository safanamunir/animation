import { animate, animateChild, group, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounceOutLeftAnimation, fade, fadeInAnimation, slide } from '../animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation',[
      transition(':enter', [
        group([
          query('h1',[
            style({ transform: 'translateY(-20px)'}) ,
            animate(1000)    
        ]),
        query('@todoAnimation',
         stagger(200, animateChild()))
        ]) 
    ])
  ]),
    trigger('todoAnimation',[
      transition(':enter',[
        useAnimation(fadeInAnimation,{
          params: {
            duration: '500ms'
          }

        })
      ]),
      transition(':leave',[
         style({ backgroundColor: 'yellow' }),
         animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])

    ])
  ]
})
export class TodosComponent implements OnInit {
 
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'
  ];

  constructor() { }

  ngOnInit(): void {
  }


  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event: any){
    console.log($event);
  }

  animationDone($event: any){
    console.log($event);
  }
}
