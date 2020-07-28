import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolver';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolver } from './components/mail-view/mail.view-resolver';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,

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
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [MailFolderResolve, MailViewResolver],
  exports: []
})
export class MailModule {}
