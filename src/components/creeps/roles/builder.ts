/**
 * Runs all creep actions.
 *
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  if (creep.memory.building && creep.carry.energy == 0) {
    creep.memory.building = false;
    creep.say("🔄 harvest");
  }
  if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
    creep.memory.building = true;
    creep.say("🚧 build");
  }

  if (creep.memory.building) {
    let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if (targets.length) {
      if (creep.build(targets[0] as ConstructionSite) == ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0] as ConstructionSite, { visualizePathStyle: { stroke: "#ffffff" } });
      }
    }
  }
  let sources = creep.room.find(FIND_SOURCES);
  if (creep.harvest(sources[0] as Source) == ERR_NOT_IN_RANGE) {
    creep.moveTo(sources[0] as Source, { visualizePathStyle: { stroke: "#ffaa00" } });
  }
}
