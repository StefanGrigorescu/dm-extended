import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardPileComponent } from './cards/card-pile/card-pile.component';
import { CardPoolComponent } from './cards/card-pool/card-pool.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailComponent } from './tournaments/tournament-detail/tournament-detail.component';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import { TournamentItemComponent } from './tournaments/tournament-list/tournament-item/tournament-item.component';
import { DecksComponent } from './decks/decks.component';
import { DeckStatisticsComponent } from './decks/deck-statistics/deck-statistics.component';
import { DeckListComponent } from './decks/deck-list/deck-list.component';
import { DeckItemComponent } from './decks/deck-list/deck-item/deck-item.component';
import { DeckDetailComponent } from './decks/deck-detail/deck-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TournamentFormComponent } from './tournaments/tournament-form/tournament-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPileComponent,
    CardPoolComponent,
    TournamentsComponent,
    TournamentDetailComponent,
    TournamentListComponent,
    TournamentItemComponent,
    DecksComponent,
    DeckStatisticsComponent,
    DeckListComponent,
    DeckItemComponent,
    DeckDetailComponent,
    GalleryComponent,
    TournamentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
