import { Observable } from 'rxjs';

import { PlayerEntity } from '../../entities/player-entity.interface';
import { PlayerStatsEntity } from '../../entities/player-stats-entity.interface';
import { MatchHistoryItemEntity } from '../../entities/match-history-item-entity.interface';
;

export abstract class GetPlayersUseCase {
    abstract getPlayers(): Observable<PlayerEntity[]>;
}

export abstract class GetPlayerByIdUseCase {
    abstract getPlayerById(id: string): Observable<PlayerEntity | null>;
}

export abstract class CreatePlayerUseCase {
    abstract createPlayer(username: string, initialRating?: number): Observable<PlayerEntity>;
}

export abstract class UpdatePlayerUseCase {
    abstract updatePlayer(id: string, updates: Partial<PlayerEntity>): Observable<PlayerEntity>;
}

export abstract class DeletePlayerUseCase {
    abstract deletePlayer(id: string): Observable<boolean>;
}

export abstract class GetPlayerStatsUseCase {
    abstract getPlayerStats(id: string): Observable<PlayerStatsEntity>;
}

export abstract class UpdatePlayerRatingUseCase {
    abstract updatePlayerRating(id: string, newRating: number): Observable<PlayerEntity>;
}

export abstract class GetPlayerRankUseCase {
    abstract getPlayerRank(id: string): Observable<number>;
}

export abstract class SearchPlayersUseCase {
    abstract searchPlayers(query: string): Observable<PlayerEntity[]>;
}

export abstract class GetPlayerMatchHistoryUseCase {
    abstract getPlayerMatchHistory(id: string): Observable<MatchHistoryItemEntity[]>;
}
