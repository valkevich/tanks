import { map } from './map/map.js';
import { MAP_LEGEND, MAP_LEGEND_CLASS } from './constans/constans.js';
import { Tank } from './tanks/Tank.js';
const init = (item, itemClass) => {
    map.renderAllItems(map.findItemsCoordinates(item) , itemClass )
}

init(MAP_LEGEND.WALL, MAP_LEGEND_CLASS.WALL)
init(MAP_LEGEND.ENEMY_BASE, MAP_LEGEND_CLASS.ENEMY_TANK)
init(MAP_LEGEND.PLAYER_BASE, MAP_LEGEND_CLASS.PLAYER_TANK)

const t = document.querySelector('.game-object__player-tank')

new Tank(t)
