import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static _instanceCounter = 0;
  private _stamina: EnergyType;

  constructor(name: string, stamina: EnergyType = 'stamina', special = 0, cost = 0) {
    super(name, special, cost);
    this._stamina = stamina;
  }

  static override createdArchetypeInstances(): number {
    this._instanceCounter += 1;
    return this._instanceCounter;
  }

  get energyType(): EnergyType {
    return this._stamina;
  }
}