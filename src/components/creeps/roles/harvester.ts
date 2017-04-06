import * as creepActions from "../creepActions";
import { RoleBase } from "./shared/roleBase";

/**
 * Harvester Role.
 *
 */
export class Harvester extends RoleBase {
  public roleName: string = "harvester";
  private spawn: Spawn;
  private energySource: Source;

  constructor(creep: Creep) {
    super(creep);
    this.spawn = creep.room.find<Spawn>(FIND_MY_SPAWNS)[0];
    this.energySource = creep.room.find<Source>(FIND_SOURCES_ACTIVE)[0];
  }

  public run(): void {
    if (creepActions.needsRenew(this.creep)) {
      creepActions.moveToRenew(this.creep, this.spawn);
    } else if (_.sum(this.creep.carry) === this.creep.carryCapacity) {
      this.moveToDropEnergy(this.spawn);
    } else {
      this.moveToHarvest(this.energySource);
    }
  }
}


