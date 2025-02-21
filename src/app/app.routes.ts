import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { SpellsComponent } from './pages/spells/spells.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'spells',
        component: SpellsComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
