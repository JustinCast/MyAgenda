import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";
import { ErrorHandleComponent } from "./error-handle/error-handle.component";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";

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
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErrorHandleComponent
    }
]