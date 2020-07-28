import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { MailModule } from './mail/mail.module';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const ROUTES: Routes = [
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  data: {preload: true}
},
  // {path: '', loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)},
  { path: '**', redirectTo: 'mail/(folder/inbox)' }
];


export class CustomPreLoad implements PreloadingStrategy{
  preload(route: Route, fn: () => Observable<any>): Observable<any>{
    return route.data && route.data?.preload ? fn().pipe(delay(3000)) : of(null)
  }
}

@NgModule({
  imports: [ MailModule, RouterModule.forRoot(ROUTES, {preloadingStrategy: CustomPreLoad}),],
  exports: [RouterModule],
  providers: [CustomPreLoad]
})
export class AppRoutingModule { }
