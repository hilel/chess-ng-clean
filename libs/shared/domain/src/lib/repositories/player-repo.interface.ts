import { Observable } from 'rxjs';

import { PlayerEntity } from '../entities/player-entity.interface';
import { PlayerStatsEntity } from '../entities/player-stats-entity.interface';
import { MatchHistoryItemEntity } from '../entities/match-history-item-entity.interface';

export interface PlayerRepo {
    getAll(): Observable<PlayerEntity[]>;
    
    getById(id: string): Observable<PlayerEntity | null>;
    
    create(player: Omit<PlayerEntity, 'id'>): Observable<PlayerEntity>;
    
    update(id: string, player: Partial<PlayerEntity>): Observable<PlayerEntity>;
    
    delete(id: string): Observable<boolean>;
    
    search(query: string): Observable<PlayerEntity[]>;
    
    updateRating(id: string, newRating: number): Observable<PlayerEntity>;
    
    getPlayerStats(id: string): Observable<PlayerStatsEntity>;
    
    getPlayerRank(id: string): Observable<number>;
    
    getPlayerMatchHistory(id: string): Observable<MatchHistoryItemEntity[]>;
}
