import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AddAttachementComponent } from './components/add-attachement/add-attachement.component';
import { AttachementDetailsComponent } from './components/attachement-details/attachement-details.component';
import { AttachementsListComponent } from './components/attachements-list/attachements-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTicketComponent,
    TicketDetailsComponent,
    TicketsListComponent,
    AddPostComponent,
    PostDetailsComponent,
    PostsListComponent,
    AddAttachementComponent,
    AttachementDetailsComponent,
    AttachementsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
