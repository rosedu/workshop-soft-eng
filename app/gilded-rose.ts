export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    private increasingByOne: Array<string> = [
        'Aged Brie',
        'Backstage passes to a TAFKAL80ETC concert',
    ];
    readonly QUALITY_LIMIT = 50;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private handleBackstagePasses(item: Item) {
        if (item.sellIn > 10) {
            item.quality += 1;
        }
        else if (5 < item.sellIn && item.sellIn <= 10) {
            item.quality += 2;
        }
        else if (0 < item.sellIn && item.sellIn <= 5) {
            item.quality += 3;
        }
        else { //item.sellIn is 0 or less
            item.quality = 0;
        }

        // quality cannot be > QUALITY_LIMIT
        item.quality = Math.min(item.quality, this.QUALITY_LIMIT);
        item.sellIn -= 1;
    }

    updateQuality() {
        for (let item of this.items) {
            // legendary item remains unchanged
            if (item.name === 'Sulfuras, Hand of Ragnaros') continue;
            
            if (item.quality <= 0 && !this.increasingByOne.includes(item.name)) {
                item.sellIn -= 1;
                continue;
            }
            
            // handle item.quality for all possible cases
            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.handleBackstagePasses(item);
                continue;
            }
            else if (this.increasingByOne.includes(item.name)) {
                item.quality += 1;
            }
            else if (item.name === 'Conjured Mana Cake' && item.sellIn > 0) {
                item.quality -= 2;
            }
            else if (item.sellIn > 0) { // regular item
                item.quality -= 1;
            }
            else { // regular item past sell date
                item.quality -= 2;
            }

            item.sellIn -= 1;
            // quality cannot be > QUALITY_LIMIT
            item.quality = Math.min(item.quality, this.QUALITY_LIMIT);
            // quality cannot be < 0
            item.quality = Math.max(0, item.quality);
        }
        return this.items;
    }
}