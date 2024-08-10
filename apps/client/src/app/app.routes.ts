import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'game',
        loadChildren: () => import('@chess-ngc/ui').then(m => m.gameRoutes)
    },
    {
        path: '**',
        redirectTo: 'game/new'
    }
];
