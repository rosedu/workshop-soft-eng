export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    constructor(public items: Item[] = []) {}

    updateQuality(): Item[] {
        for (const item of this.items) {
            this.updateItem(item);
        }

        return this.items;
    }

    private updateItem(item: Item): void {
        switch (item.name) {
            case 'Aged Brie':
                this.updateAgedBrie(item);
                break;

            case 'Backstage passes to a TAFKAL80ETC concert':
                this.updatePass(item);
                break;

            case 'Sulfuras, Hand of Ragnaros':
                break;

            default:
                this.updateNormalItem(item);
        }
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn--;
        }
        if (item.sellIn < 0) {
            this.handleExpired(item);
        }
    }
    private updateAgedBrie(item: Item): void {
        if (item.quality < 50) {
            item.quality++;
        }
    }
    private updatePass(item: Item): void {
        if (item.quality < 50) item.quality++;
        if (item.sellIn < 11 && item.quality < 50) item.quality++;
        if (item.sellIn < 6 && item.quality < 50) item.quality++;
    }
    private updateNormalItem(item: Item): void {
        if (item.quality > 0) {
            item.quality--;
        }
    }
    private handleExpired(item: Item): void {
        switch (item.name) {
            case 'Aged Brie':
                if (item.quality < 50) item.quality++;
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                item.quality = 0;
                break;
            case 'Sulfuras, Hand of Ragnaros':
                break;
            default:
                if (item.quality > 0) item.quality--;
        }
    }
}