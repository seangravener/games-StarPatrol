import { Scene, Textures } from "phaser";

export interface SpriteDefinition {
  scene: Scene;
  x: number;
  y: number;
  texture: string | Textures.Texture;
  frame?: string | number;
}
