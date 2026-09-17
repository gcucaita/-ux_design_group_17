import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MobileScreenComponent } from './features/mobile/mobile-screen.component';
import { WebPlaceholderComponent } from './features/web/web-placeholder.component';

const mobileScreens: Routes = [
  { path: 'inicio', component: MobileScreenComponent, data: { screen: 'M01' } },
  { path: 'sin-alarmas', component: MobileScreenComponent, data: { screen: 'X01' } },
  { path: 'crear-alarma', component: MobileScreenComponent, data: { screen: 'V01' } },
  { path: 'alarma-guardada', component: MobileScreenComponent, data: { screen: 'M05' } },
  { path: 'alarma-activa', component: MobileScreenComponent, data: { screen: 'M06' } },
  { path: 'responder', component: MobileScreenComponent, data: { screen: 'V02' } },
  { path: 'voz-no-reconocida', component: MobileScreenComponent, data: { screen: 'X02' } },
  { path: 'sin-conexion', component: MobileScreenComponent, data: { screen: 'X03' } },
  { path: 'actividad-confirmada', component: MobileScreenComponent, data: { screen: 'M08' } },
  { path: 'posponer', component: MobileScreenComponent, data: { screen: 'M11' } },
  { path: 'reprogramar', component: MobileScreenComponent, data: { screen: 'M12' } },
  { path: 'proximo-intento', component: MobileScreenComponent, data: { screen: 'M13' } },
  { path: 'cierre-seguro', component: MobileScreenComponent, data: { screen: 'M14' } },
  { path: 'microfono', component: MobileScreenComponent, data: { screen: 'M15' } },
  { path: 'ajustes', component: MobileScreenComponent, data: { screen: 'M19' } },
  { path: 'privacidad', component: MobileScreenComponent, data: { screen: 'M20' } },
  { path: 'datos-eliminados', component: MobileScreenComponent, data: { screen: 'X16' } },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
];

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Alarma Conversacional' },
  { path: 'web', component: WebPlaceholderComponent, title: 'Maquetación web' },
  { path: 'mobile', children: mobileScreens, title: 'Maquetación mobile' },
  { path: '**', redirectTo: '' },
];
