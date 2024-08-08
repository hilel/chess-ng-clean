import { Observable } from 'rxjs';

import { GameEntity } from '../../entities/game-entitiy.interface';
import { MoveValue } from '../../value-objects/move.value';

export abstract class GetGamesUseCase {
    abstract getGames(): Observable<GameEntity[]>;
}

export abstract class GetGameByIdUseCase {
    abstract getGameById(id: string): Observable<GameEntity>;
}

export abstract class CreateGameUseCase {
    abstract createGame(whitePlayerId: string, blackPlayerId: string): Observable<GameEntity>;
}

export abstract class MakeMoveUseCase {
    abstract makeMove(gameId: string, move: MoveValue): Observable<GameEntity>;
}

export abstract class GetGameHistoryUseCase {
    abstract getGameHistory(gameId: string): Observable<MoveValue[]>;
}

export abstract class ResignGameUseCase {
    abstract resignGame(gameId: string, playerId: string): Observable<GameEntity>;
}

export abstract class OfferDrawUseCase {
    abstract offerDraw(gameId: string, playerId: string): Observable<boolean>;
}

export abstract class AcceptDrawUseCase {
    abstract acceptDraw(gameId: string, playerId: string): Observable<GameEntity>;
}

export abstract class GetActiveGamesForPlayerUseCase {
    abstract getActiveGamesForPlayer(playerId: string): Observable<GameEntity[]>;
}

export abstract class AnalyzeGameUseCase {
    abstract analyzeGame(gameId: string): Observable<string>; // Returns analysis result
}

