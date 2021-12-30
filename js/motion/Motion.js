// import { ROUTES } from "../constans/constans.js"
// import { map } from "../map/map.js"

// export class MotionService {
//     changeMovementSide(tank) {
//         const r = Math.floor((Math.random() * ROUTES.length));
//         tank.style.transform = `rotate(${ROUTES[r]})`;
//     }

//     moveStraight(tank) {
//         const pos = this.findTankMuzzle(tank)
//         if(this.findFalseMotion(tank)) {
//             map.matrixMap[parseInt(tank.style.top) / 64][parseInt(tank.style.left) / 64] = 0;
//             tank.style.top = `${parseInt(tank.style.top) + pos.top}px`
//             tank.style.left = `${parseInt(tank.style.left) + pos.left}px`
//         } else {
//             this.changeMovementSide(tank)
//         }

//     }

//     findTankMuzzle(tank) {
//         if (tank.style.transform === 'rotate(180deg)') {
//             return { left: 0, top: 64, direction:'down' }
//         }
//         if (tank.style.transform === 'rotate(90deg)') {
//             return { left: 64, top: 0, direction:'right' }
//         }
//         if (tank.style.transform === 'rotate(-90deg)') {
//             return { left: -64, top: 0, direction: 'left' }
//         }
//         if (tank.style.transform === 'rotate(0deg)' || tank.style.transform === '') {
//             return { left: 0, top: -64, direction: 'up' }
//         }
//     }

//     findFalseMotion(tank) {
//         const nextStepposition = this.findTankMuzzle(tank)
//         if(nextStepposition.direction === 'up' && parseInt(tank.style.top) + nextStepposition.top < 0) {
//             return false
//         }
//         if(nextStepposition.direction === 'down' && parseInt(tank.style.top) + nextStepposition.top > 832) {
//             return false
//         }
//         if(nextStepposition.direction === 'left' && parseInt(tank.style.left) + nextStepposition.left < 0) {
//             return false
//         }
//         if(nextStepposition.direction === 'right' && parseInt(tank.style.left) + nextStepposition.left > 768) {
//             return false
//         }
//         if(!(map.matrixMap[(parseInt(tank.style.top) + nextStepposition.top) / 64][(parseInt(tank.style.left) + nextStepposition.left) / 64] === 0)) {
//             return false
//         } 
//         return nextStepposition
//     }

//     // bumpEdgeMap(){

//     // }
// }

// export const motionService = new MotionService()