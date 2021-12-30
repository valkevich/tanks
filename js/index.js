import { map } from './map/map.js';
import { MAP_LEGEND, MAP_LEGEND_CLASS } from './constans/constans.js';
import { EnemyTank } from './tanks/EnemyTank.js'
import { PlayerTank } from './tanks/PlayerTank.js';
import { Bullet } from './bullet/Bullet.js';


const init = (item, itemClass) => {
    map.renderAllItems(map.findItemsCoordinates(item), itemClass)
}

init(MAP_LEGEND.WALL, MAP_LEGEND_CLASS.WALL)
init(MAP_LEGEND.ENEMY_BASE, MAP_LEGEND_CLASS.ENEMY_TANK)
init(MAP_LEGEND.PLAYER_BASE, MAP_LEGEND_CLASS.PLAYER_TANK)


const playerTank = document.querySelector('.game-object__player-tank')
const enemyTanksHtml = Array.from(document.querySelectorAll('.game-object__enemy-tank'))

const pt = new PlayerTank(playerTank, MAP_LEGEND.PLAYER_BASE)
// const bullet = new Bullet(playerTank).fireBullet()

const enemyTanks = enemyTanksHtml.map((tank) => {
    tank = new EnemyTank(tank, MAP_LEGEND.ENEMY_BASE);
    return tank
})

pt.playerMove()


// setInterval(() => {
//     enemyTanks.forEach((tank) => {
//         tank.moveRandomly()
//     });

    
// }, 1000);
