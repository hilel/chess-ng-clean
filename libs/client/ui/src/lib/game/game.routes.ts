import { Route } from '@angular/router';

export const gameRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./game.component').then(m => m.GameComponent),
        children: [
            {
                path: 'new',
                loadComponent: () => import('./game-new/game-new.component').then(m => m.GameNewComponent)
            },
            {
                path: '**',
                redirectTo: 'new'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/new'
    }
];
