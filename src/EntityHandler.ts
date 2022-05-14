import Entity from "./Entity.js";
import Wall from "./Wall.js";
import Player from "./Player.js";
import Alien from "./Alien.js";
import Bullet from "./Bullet.js";

export default class EntityHandler{
    public static Entities: Entity[];
    public static Bullets: Bullet[];

    public static Init(){
        EntityHandler.Entities = [];
        EntityHandler.Bullets = [];

        EntityHandler.SetupPlayer();

        EntityHandler.SetupWalls();

        EntityHandler.SetupEnemies();
    }

    public static SetupPlayer(){
        let player = new Player();
        EntityHandler.Entities.push(player);
    }

    public static SetupWalls(){
        let wall1 = new Wall(100, 300);
        let wall2 = new Wall(360, 300);
        let wall3 = new Wall(600, 300);

        EntityHandler.Entities.push(wall1);
        EntityHandler.Entities.push(wall2);
        EntityHandler.Entities.push(wall3);
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