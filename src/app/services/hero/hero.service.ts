import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes= of(HEROES);
    this.messageService.add("HeroService: heroes have been fetched.")
    return heroes;
  }
}
