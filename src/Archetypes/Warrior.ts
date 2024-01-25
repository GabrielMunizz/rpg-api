import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static _instanceCounter = 0;
  private _forca: EnergyType;

  constructor(name: string, forca: EnergyType = 'stamina', special = 0, cost = 0) {
    super(name, special, cost);
    this._forca = forca;
  }

  static override createdArchetypeInstances(): number {
    this._instanceCounter += 1;
    return this._instanceCounter;
  }

  get energyType(): EnergyType {
    return this._forca;
  }
}