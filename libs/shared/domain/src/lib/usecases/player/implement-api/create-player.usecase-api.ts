import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { CreatePlayerUseCase } from '../player.usecase.abstract';
import { PlayerRepo } from '../../../repositories/player-repo.interface';
import { PlayerEntity } from '../../../entities/player-entity.interface';

@Injectable()
export class CreatePlayerUseCaseApi implements CreatePlayerUseCase {

    constructor(private _player: PlayerRepo) { }
    
    createPlayer(player: Omit<PlayerEntity, 'id'>): Observable<PlayerEntity> {
        return this._player.createPlayer(player);
    }
}
