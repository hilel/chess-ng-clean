export interface MatchHistoryItemEntity {
    gameId: string;
    opponent: string;
    result: 'win' | 'loss' | 'draw';
    date: Date;
}
