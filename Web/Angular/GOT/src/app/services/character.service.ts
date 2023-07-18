import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://anapioficeandfire.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacter(characterId: string): Observable<Character> {
    const url = `${characterId}`;
    return this.http.get<Character>(url);
  }

  getAllCharacters(pageNumber: number): Observable<Character[]> {
    const queries = `?page=${pageNumber}&pageSize=8`;
    return this.http.get<Character[]>(this.baseUrl + queries);
  }

  getACharacter(endpoint: string): Observable<Character> {
    const url = `${endpoint}`;

    return this.http.get<Character>(url);
  }
}
