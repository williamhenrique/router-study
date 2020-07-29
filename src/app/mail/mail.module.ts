import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolver';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolver } from './components/mail-view/mail.view-resolver';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';
import { MailViewGuard } from './components/mail-view/mail.view.guard';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve
        }
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        canDeactivate: [MailViewGuard],
        outlet: 'pane',
        resolve: {
          message: MailViewResolver
        }
      }
    ]
  }

];

@NgModule({
  declarations: [MailFolderComponent, MailAppComponent, MailItemComponent, MailViewComponent],
  imports: [CommonModule, AuthModule, RouterModule.forChild(ROUTES)],
  providers: [MailFolderResolve, MailViewResolver, MailViewGuard],
  exports: []
})
export class MailModule {}
