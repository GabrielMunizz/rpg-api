import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private static _instanceCounter = 0;
  private _mana: EnergyType;

  constructor(name: string, mana: EnergyType = 'mana', special = 0, cost = 0) {
    super(name, special, cost);
    this._mana = mana;
  }

  static override createdArchetypeInstances(): number {
    this._instanceCounter += 1;
    return this._instanceCounter;
  }

  get energyType(): EnergyType {
    return this._mana;
  }
}