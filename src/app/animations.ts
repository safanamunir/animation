import { animate, keyframes, state, style,animation ,transition, trigger, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation([
    animate('0.5s ease-out', keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
     ]))
    ]);
export let slide = trigger('slide',[
    transition(':enter',[
    style({transform: 'translateX(-10px)'}),
    animate('0.5s ease-in')     
    ]),
    transition(':leave',[
        // animate('0.5s ease-out', style({
        //     transform: 'translateX(-100%)'
        //}))
        useAnimation(bounceOutLeftAnimation)
    ])
    
])

export let fadeInAnimation = animation([
    style({ opacity: 0}),
    animate('{{ duration }} {{ easing}}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
})

export let fade =  trigger('fade',[
    transition(':enter',
       useAnimation(fadeInAnimation)
    ),
    transition(':leave',[
        animate(2000,style({ opacity: 0}),
        )    
    ])
  ])

