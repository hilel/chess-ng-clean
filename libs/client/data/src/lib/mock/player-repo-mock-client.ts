import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MatchHistoryItemEntity, PlayerRepo, PlayerStatsEntity } from '@chess-ngc/shared/domain';
import { PlayerEntity } from 'libs/shared/domain/src/lib/entities/player-entity.interface';

@Injectable({ providedIn: 'root' })
export class PlayerRepoMockClient implements PlayerRepo {
    getAllPlayers(): Observable<PlayerEntity[]> {
        return of([]);
    }
    getPlayerById(id: string): Observable<PlayerEntity | null> {
        return of(null);
    }
    createPlayer(player: PlayerEntity): Observable<PlayerEntity> {
        return of({} as PlayerEntity);
    }
    updatePlayer(player: Partial<PlayerEntity>): Observable<PlayerEntity> {
        return of({} as PlayerEntity);
    }
    deletePlayer(id: string): Observable<boolean> {
        return of(true);
    }
    searchPlayer(query: string): Observable<PlayerEntity[]> {
        return of([]);
    }
    updateRating(id: string, newRating: number): Observable<PlayerEntity> {
        return of({} as PlayerEntity);
    }
    getPlayerStats(id: string): Observable<PlayerStatsEntity> {
        return of({} as PlayerStatsEntity);
    }
    getPlayerRank(id: string): Observable<number> {
        return of(0);
    }
    getPlayerMatchHistory(id: string): Observable<MatchHistoryItemEntity[]> {
        return of([]);
    }
}