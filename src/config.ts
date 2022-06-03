import { Types, AUTO } from 'phaser'
import { MainScene } from './scenes/MainScene'

export const GameConfig: Types.Core.GameConfig = {
  title: 'Star Patrol',
  url: '',
  version: '0.1',
  width: 800,
  height: 600,
  backgroundColor: 0x3a404d,
  type: AUTO,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [MainScene],
}
