import { Observable } from 'rxjs';

import { PlayerEntity } from '../entities/player-entity.interface';
import { PlayerStatsEntity } from '../entities/player-stats-entity.interface';
import { MatchHistoryItemEntity } from '../entities/match-history-item-entity.interface';

export interface PlayerRepo {
    getAllPlayers(): Observable<PlayerEntity[]>;
    
    getPlayerById(id: string): Observable<PlayerEntity | null>;
    
    createPlayer(player: Omit<PlayerEntity, 'id'>): Observable<PlayerEntity>;
    
    updatePlayer(player: Partial<PlayerEntity>): Observable<PlayerEntity>;
    
    deletePlayer(id: string): Observable<boolean>;
    
    searchPlayer(query: string): Observable<PlayerEntity[]>;
    
    updateRating(id: string, newRating: number): Observable<PlayerEntity>;
    
    getPlayerStats(id: string): Observable<PlayerStatsEntity>;
    
    getPlayerRank(id: string): Observable<number>;
    
    getPlayerMatchHistory(id: string): Observable<MatchHistoryItemEntity[]>;
}
