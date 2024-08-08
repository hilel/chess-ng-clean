import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { CreateGameUseCase } from '../game.usecase.abstract';
import { GameRepo } from '../../../repositories/game-repo.interface';
import { GameEntity } from '../../../entities/game-entitiy.interface';

@Injectable()
export class CreateGameUseCaseApi implements CreateGameUseCase {

    constructor(private _game: GameRepo) { }
    
    createGame(whitePlayerId: string, blackPlayerId: string): Observable<GameEntity> {
        return this._game.createGame(whitePlayerId, blackPlayerId);
    }
}
