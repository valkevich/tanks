import { MAP } from '../constans/constans.js';

class Map {
    constructor() {
        this.matrixMap = MAP;
        this.htmlMap = document.querySelector('#game-map')
    }

    findItemsCoordinates(item) {
        const itemCoordinates = [];
        this.matrixMap.forEach((matrixColumn, matrixColumnIndex) => {
            matrixColumn.forEach((matrixRow, matrixRowIndex) => {
                if (matrixRow === item) {
                    itemCoordinates.push({ top: matrixColumnIndex * 64, left: matrixRowIndex * 64 })
                }
            })
        })
        return itemCoordinates;
    }

    createItem(itemCoordinates, itemClass) {
        const item = document.createElement('div');
        item.classList.add('game-object');
        item.classList.add(`game-object__${itemClass}`);
        item.style.top = `${itemCoordinates.top}px`
        item.style.left = `${itemCoordinates.left}px`
        return item;
    }

    createAllItems(itemsCoordinates, itemClass) {
        const items = [];
        itemsCoordinates.forEach(itemCoordinates => {
            const item = this.createItem(itemCoordinates, itemClass);
            items.push(item);
        });
        return items;
    }

    renderAllItems(itemsCoordinates, itemClass) {
        const items = this.createAllItems(itemsCoordinates, itemClass);
        items.forEach((item) => {
            this.htmlMap.append(item);
        })
    }
}

export const map = new Map()
