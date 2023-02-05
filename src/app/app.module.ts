import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardPileComponent } from './cards/card-pile/card-pile.component';
import { CardPoolComponent } from './cards/card-pool/card-pool.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailComponent } from './tournaments/tournament-detail/tournament-detail.component';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import { TournamentItemComponent } from './tournaments/tournament-list/tournament-item/tournament-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPileComponent,
    CardPoolComponent,
    TournamentsComponent,
    TournamentDetailComponent,
    TournamentListComponent,
    TournamentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
