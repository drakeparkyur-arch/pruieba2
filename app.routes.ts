import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '', component: Home},            // Ruta raíz (Inicio)
    {path: 'about', component: About},      // Ruta Nosotros
    {path: 'product', component: Product},  // Ruta Productos
    {path: 'contact', component: Contact},  // Ruta Contacto
    {path: '**', redirectTo: ''}            // Cualquier otra ruta vuelve al Inicio
];
