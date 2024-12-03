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
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    decreaseItemQuality(item : Item, value : number) : Item {
        item.quality -= value
        if (item.quality < 0) item.quality = 0
        return item
    }

    increaseItemQuality(item : Item, value : number) : Item {
        item.quality += value
        if (item.quality > 50) item.quality = 50
        return item
    }

    increaseAgedBrieQuality(item : Item) : Item {
        if (item.sellIn > 0) return item;
        return this.increaseItemQuality(item, 1)
    }
    
    modifyQualityBackStagePasses(item : Item) : Item {
        if (item.sellIn > 10) return this.increaseItemQuality(item, 1)
        if (item.sellIn >= 6 && item.sellIn <= 10) return this.increaseItemQuality(item, 2)
        if (item.sellIn <= 5 && item.sellIn > 0) return this.increaseItemQuality(item, 3)
        item.quality = 0
        return item 
    }

    modifyRegularItemQuality(item : Item) : Item {
        if (item.sellIn >= 0) {
            item = this.decreaseItemQuality(item, 1)
        }
        if (item.sellIn < 0) {
            item = this.decreaseItemQuality(item, 2)
        }
        return item
    }


    updateQuality() {
        for (let i = 0; i < this.items.length; i++) { 
            if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
                continue
            }

            this.items[i].sellIn = this.items[i].sellIn - 1;

            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.items[i] = this.modifyQualityBackStagePasses(this.items[i]);
                continue
            }
            if (this.items[i].name == 'Aged Brie') {
                this.items[i] = this.increaseAgedBrieQuality(this.items[i])
                continue
            }
            if (this.items[i].name == 'Conjured') {
                this.items[i] = this.decreaseItemQuality(this.items[i], 2)
                continue
            }
            this.items[i] = this.modifyRegularItemQuality(this.items[i])
        }
        return this.items;
    }
}