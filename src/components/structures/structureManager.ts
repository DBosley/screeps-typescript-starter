// import * as Config from "../../config/config";


// import { log } from "../../lib/logger/log";


// export class StructureManager {
//   /**
//    *
//    */
//   constructor(
//     public structures: Structure[] = [],
//     public structureCount: number = 0,
//     public containers: Structure[] = [],
//   ) { }
//   /**
//    * Initialization scripts for StructureManager module.
//    *
//    * @export
//    * @param {Room} room
//    */
//   public run(room: Room): void {
//     this.loadStructures(room);
//     this.buildMissingStructures(room);

//     _.each(this.creeps, (creep: Creep) => {
//       if (creep.memory.role === "harvester") {
//         harvester.run(creep);
//       }
//       if (creep.memory.role === "upgrader") {
//         upgrader.run(creep);
//       }
//     });
//   }

//   /**
//    * Loads and counts all available structures.
//    *
//    * @param {Room} room
//    */
//   private loadStructures(room: Room) {
//     this.structures = room.find<Structure>(FIND_MY_STRUCTURES);
//     this.structureCount = _.size(this.structures);

//     // Iterate through each creep and push them into the role array.
//     this.containers = _.filter(this.structures, (structure) => structure.structureType === STRUCTURE_CONTAINER);

//     if (Config.ENABLE_DEBUG_MODE) {
//       log.info(this.structureCount + " structures found in the playground.");
//     }
//   }

//   /**
//    * Creates a new structure if we still have enough space.
//    *
//    * @param {Room} room
//    */
//   private buildMissingStructures(room: Room) {

//     let sites: ConstructionSite[] = room.find<ConstructionSite>(FIND_MY_SPAWNS, {
//       filter: (spawn: ConstructionSite) => {
//         return spawn.progress === null;
//       },
//     });

//     if (Config.ENABLE_DEBUG_MODE) {
//       if (sites[0]) {
//         log.info(`Spawn:${sites[0].id}:${sites[0].structureType}`);
//       }
//     }

//     this.buildStructure(STRUCTURE_CONTAINER, 2, this.containers, room, sites);
//   }

//   private buildStructure(roleName: string, maxCount: number, structures: Structure[], room: Room, sites: ConstructionSite[]) {
//     if (structures.length < maxCount) {

//       _.each(sites, (spawn: ConstructionSite) => {
//         this.constructStructure(spawn, bodyParts, roleName);
//       });
//     }
//   }

//   /**
//  * Spawns a new Structure at a ConstructionSite.
//  *
//  * @param {ConstructionSite} stie
//  * @param {string[]} bodyParts
//  * @param {string} role
//  * @returns
//  */
//   private constructStructure(site: ConstructionSite, bodyParts: string[], role: string) {
//     let uuid: number = Memory.uuid;

//     let properties: { [key: string]: any } = {
//       role,
//       room: site.room.name,
//     };

//     if (site) {
//       Memory.uuid = uuid + 1;
//       let creepName: string = site.room.name + " - " + role + uuid;

//       log.info("Started creating new creep: " + creepName);
//       if (Config.ENABLE_DEBUG_MODE) {
//         log.info("Body: " + bodyParts);
//       }

//       status = site.createCreep(bodyParts, creepName, properties);

//       return _.isString(status) ? OK : status;
//     } else {
//       if (Config.ENABLE_DEBUG_MODE) {
//         log.info("Failed creating new creep: " + status);
//       }

//       return status;
//     }
//   }

// }
