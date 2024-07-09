import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./movies/movies.routes').then(m => m.MOVIES_ROUTES),
        // canActivate: [authGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    }
];
