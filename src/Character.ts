import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  
  constructor(        
    name = 'Chabalala',
    dexterity = getRandomInt(1, 10),
    strength = getRandomInt(1, 10),
    defense = getRandomInt(1, 10),
  ) {
    this._dexterity = dexterity;
    this._defense = defense;
    this._strength = strength;
    this._race = new Elf(name, dexterity);
    this._archetype = new Mage(name, 'mana');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;  
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(atackPoints: number): number {
    const damage = atackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }    
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    } 
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const checkMax = this._maxLifePoints + getRandomInt(1, 10);    
    if (checkMax < this._race.maxLifePoints) {
      this._maxLifePoints = checkMax;
    } else {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;         
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}