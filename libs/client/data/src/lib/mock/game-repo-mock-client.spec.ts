import { GameRepoMockClient } from './game-repo-mock-client';

describe('GameRepoMockClient', () => {
  let gameRepoMockClient: GameRepoMockClient;

  beforeEach(() => {
    gameRepoMockClient = new GameRepoMockClient();
  });

  it('should be created', () => {
    expect(gameRepoMockClient).toBeTruthy();
  });
});