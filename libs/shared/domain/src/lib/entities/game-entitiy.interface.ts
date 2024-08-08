import { GameStatus } from '../enums/game-status.enum';

export interface GameEntity {
    id: string;
    playerWhiteId: string;
    playerBlackId: string;
    status: GameStatus;
    currentFen: string;
    moves: string[];
    createdAt: Date;
    updatedAt: Date;
}
