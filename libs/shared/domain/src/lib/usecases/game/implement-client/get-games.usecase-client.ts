import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetGamesUseCase } from '../game.usecase.abstract';
import { GameRepo } from '../../../repositories/game-repo.interface';
import { GameEntity } from '../../../entities/game-entitiy.interface';

@Injectable({ providedIn: 'root' })
export class GetGamesUseCaseClient implements GetGamesUseCase {

    constructor(private _game: GameRepo) { }
    
    getGames(): Observable<GameEntity[]> {
        return this._game.getGames();
    }
}
