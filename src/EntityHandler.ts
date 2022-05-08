import Entity from "./Entity.js";
import Player from "./Player.js";
import Alien from "./Alien.js";
import Bullet from "./Bullet.js";

export default class EntityHandler{
    public static Entities: Entity[];
    public static Bullets: Bullet[];

    public static Init(){
        EntityHandler.Entities = [];
        EntityHandler.Bullets = [];

        let player = new Player();
        EntityHandler.Entities.push(player);

        EntityHandler.SetupEnemies();
    }

    public static SetupEnemies(){
        let enemy = new Alien(0, 0, 0);
        EntityHandler.Entities.push(enemy);
    }

    public static SpawnBullet(x: number, y: number, direction: number){
        let bullet = new Bullet(x, y, direction);
        EntityHandler.Entities.push(bullet);
        EntityHandler.Bullets.push(bullet);
    }

    public static RemoveBullet(bullet: Bullet){
        EntityHandler.Bullets = EntityHandler.Bullets.filter( b => b != bullet);
        EntityHandler.Entities = EntityHandler.Entities.filter(e => e != bullet);
    }
}