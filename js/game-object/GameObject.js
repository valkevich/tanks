export class GameObject {
    constructor(gameObject) {
        this.gameObject = gameObject;
    }

    findTankDirection() {
        switch (this.gameObject.style.transform) {
            case 'rotate(180deg)':
                return 'down';

            case 'rotate(90deg)':
                return 'right';

            case 'rotate(-90deg)':
                return 'left';

            default:
                return 'up';
        }
    }

    findTankNextStepPosition(PixelsCount) {
        const tankDirection = this.findTankDirection();
        switch (tankDirection) {
            case 'down':
                return { left: 0, top: PixelsCount };

            case 'right':
                return { left: PixelsCount, top: 0 };

            case 'left':
                return { left: - PixelsCount, top: 0 };

            default:
                return { left: 0, top: - PixelsCount };
        }
    }

}