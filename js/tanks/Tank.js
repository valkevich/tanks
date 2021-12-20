import { motionService } from "../motion/Motion.js";

export class Tank {
    constructor(tank) {
        this.tank = tank;
        this.tankPosition = {
            top: this.tank.style.top,
            left: this.tank.style.left
        };
    }
    a() {
        const int = () => {
            setInterval(() => {
                if(this.falseResults()) {
                    motionService.moveStraight(this.tank)
                    return true
                } else {
                    motionService.changeStorona(this.tank)
                    motionService.moveStraight(this.tank)
                    return false
                }
            }, 1000);
        } 
        int()
    }


    falseResults() {
      return motionService.falseMotion(this.tank)
    }
}
