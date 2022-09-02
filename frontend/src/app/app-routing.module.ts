import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ticket', pathMatch: 'full' },
  { path: 'ticket', component: TicketListComponent },
  { path: 'ticket/:id', component: TicketDetailsComponent },
  { path: 'add', component: AddTicketComponent },

  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post', component: PostListComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'add', component: AddPostComponent },

  { path: '', redirectTo: 'attachement', pathMatch: 'full' },
  { path: 'attachement', component: AttachementListComponent },
  { path: 'attachement/:id', component: AttachementDetailsComponent },
  { path: 'add', component: AddAttachementComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
