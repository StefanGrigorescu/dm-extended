import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';
import { ApiCard } from "./api-card.model";
import { Card } from "./card.model";
import { Cards } from "./cards-model";

@Injectable()
export class CardsService {

    constructor(private httpClient: HttpClient) {}

    getShobuIoCards(): Observable<Cards> {
        return this
            .httpClient
            .get<ApiCard[]>('https://shobu.io/api/cards')
            .pipe(
                map(apiCards => new Cards(
                    apiCards.map(apiCard => new Card(
                        apiCard.uid,
                        apiCard.name,
                        apiCard.civilization,
                        apiCard.family,
                        apiCard.manaCost,
                        apiCard.set,
                        apiCard.type
                    ))
                ))
            );
    }
}
