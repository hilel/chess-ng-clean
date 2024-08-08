import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerRepo } from '../../../repositories/player-repo.interface';
import { PlayerEntity } from '../../../entities/player-entity.interface';
import { GetPlayerByIdUseCase } from '../player.usecase.abstract';

@Injectable({ providedIn: 'root' })
export class GetPlayerByIdUseCaseClient implements GetPlayerByIdUseCase {

    constructor(private _player: PlayerRepo) { }
    
   getPlayerById(id: string): Observable<PlayerEntity | null> {
        return this._player.getById(id);
   }
}
