import { type CharacterDataStructure, Character } from "../Character/Character";

export interface KingStructure {
  yearsOfReign: number;
}

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
