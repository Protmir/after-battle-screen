import { Dispatch, SetStateAction } from 'react';

export interface StatisticsModel {
  requestState: [boolean, Dispatch<SetStateAction<boolean>>];
  kills: number;
  deaths: number;
}

export interface PlayerModel {
  isDead?: boolean;
  name: string;
  point: number;
  stats: Omit<StatisticsModel, 'requestState'>
}
