import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instanceCounter = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._instanceCounter += 1;    
    return this._instanceCounter;
  }
}