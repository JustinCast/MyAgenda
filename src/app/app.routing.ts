import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";
import { ErrorHandleComponent } from "./error-handle/error-handle.component";

export const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'notes',
        component: NotesComponent
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErrorHandleComponent
    }
]