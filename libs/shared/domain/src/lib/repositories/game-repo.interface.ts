import { Observable } from 'rxjs';

import { GameEntity } from '../entities/game-entitiy.interface';
import { GameStatus } from '../enums/game-status.enum';
import { MoveValue } from '../value-objects/move.value';

export interface GameRepo {
    createGame(game: GameEntity): Observable<GameEntity>;
    getGameById(gameId: string): Observable<GameEntity>;
    getGames(): Observable<GameEntity[]>;
    updateGameStatus(gameId: string, status: GameStatus): Observable<void>;
    updateGameFen(gameId: string, fen: string): Observable<void>;
    addMove(gameId: string, move: MoveValue): Observable<void>;
    deleteGame(gameId: string): Observable<void>;
}
