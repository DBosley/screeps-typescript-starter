import * as creepActions from "../../creepActions";

export abstract class RoleBase {

  public abstract roleName: string;

  /**
   * Base class for common Creep actions
   */
  constructor(
    protected creep: Creep,
  ) { }

  public abstract run(): void;

  public tryHarvest(target: Source): number {
    return this.creep.harvest(target);
  }

  public moveToHarvest(target: Source): void {
    if (this.tryHarvest(target) === ERR_NOT_IN_RANGE) {
      creepActions.moveTo(this.creep, target.pos);
    }
  }

  public tryEnergyDropOff(target: Spawn | Structure): number {
    return this.creep.transfer(target, RESOURCE_ENERGY);
  }

  public moveToDropEnergy(target: Spawn | Structure): void {
    if (this.tryEnergyDropOff(target) === ERR_NOT_IN_RANGE) {
      creepActions.moveTo(this.creep, target.pos);
    }
  }
}
