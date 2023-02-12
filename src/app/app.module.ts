import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EnumValueToNamePipe } from 'src/utils/enum-value-to-name-pipe';
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
import { OpacityDirective } from '../utils/opacity.directive';

const appRoutes: Routes = [
  { path:'', component: GalleryComponent },
  { path:'gallery', component: GalleryComponent },
  { path:'tournaments', component: TournamentsComponent },
  // {
  //   path: 'tournaments/view',
  //   component: TournamentListComponent,
  //   data: { 
  //     input1: 'value1', 
  //     handleOutput1: (event) => handleOutput1(event) 
  //   } 
  // },
  // {
  //   path: 'tournaments/create',
  //   component: TournamentFormComponent,
  //   data: { 
  //     input1: 'value1', 
  //     //handleOutput1: (event) => handleOutput1(event),
  //     tournamentCreated: (event) => onTournamentDefined(event),
  //     //(tournamentCreated) = "onTournamentDefined($event)"
  //   } 
  // },
  { path:'decks', component: DecksComponent },
  { path:'decks/:deckId', component: DeckDetailComponent }, // the ":" informs angular that this is a dynamic part of the path (a parameter)
];

@NgModule({
  declarations: [
    AppComponent,
    EnumValueToNamePipe,
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
    TournamentFormComponent,
    OpacityDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
