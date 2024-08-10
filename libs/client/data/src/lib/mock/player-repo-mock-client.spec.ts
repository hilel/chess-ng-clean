import { PlayerRepoMockClient } from './player-repo-mock-client';

describe('PlayerRepoMockClient', () => {
  let playerRepoMockClient: PlayerRepoMockClient;

  beforeEach(() => {
    playerRepoMockClient = new PlayerRepoMockClient();
  });

  it('should be created', () => {
    expect(PlayerRepoMockClient).toBeTruthy();
  });
});