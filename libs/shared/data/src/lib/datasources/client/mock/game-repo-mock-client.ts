import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GameEntity, GameRepo, GameStatus, MoveValue } from '@chess-ngc/shared/domain';

@Injectable({ providedIn: 'root' })
export class GameRepoMockClient implements GameRepo {
    // implement the methods here
    getGames(): Observable<GameEntity[]> {
        return of([]);
    }
    getGameById(id: string): Observable<GameEntity | null> {
        return of(null);
    }
    createGame(whitePlayerId: string, blackPlayerId: string): Observable<GameEntity> {
        return of({} as GameEntity);
    }
    updateGameStatus(id: string, status: GameStatus): Observable<void> {
        return of();
    }
    updateGameFen(id: string, fen: string): Observable<void> {
        return of();
    }
    addMove(id: string, move: MoveValue): Observable<void> {
        return of();
    }
    deleteGame(id: string): Observable<void> {
        return of();
    }
}