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

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const isAgedBrie = this.items[i].name === 'Aged Brie';
            const isBackstage = this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert';
            const isSulfuras = this.items[i].name === 'Sulfuras, Hand of Ragnaros';
            const isConjured = this.items[i].name.startsWith('Conjured');
        
            // Quality update before sellIn
            if (!isAgedBrie && !isBackstage) {
                if (!isSulfuras && this.items[i].quality > 0) {
                    this.items[i].quality -= isConjured ? 2 : 1;
                    if (this.items[i].quality < 0) this.items[i].quality = 0;
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality += 1;
                    if (isBackstage) {
                        if (this.items[i].sellIn < 11 && this.items[i].quality < 50) this.items[i].quality += 1;
                        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) this.items[i].quality += 1;
                    }
                }
            }
        
            // SellIn update
            if (!isSulfuras) {
                this.items[i].sellIn -= 1;
            }
        
            // Quality update after sellIn
            if (this.items[i].sellIn < 0) {
                if (isAgedBrie && this.items[i].quality < 50) {
                    this.items[i].quality += 1;
                } else if (isBackstage) {
                    this.items[i].quality = 0;
                } else if (!isSulfuras && this.items[i].quality > 0) {
                    this.items[i].quality -= isConjured ? 2 : 1;
                    if (this.items[i].quality < 0) this.items[i].quality = 0;
                }
            }
        }
        
        return this.items;
        
    }
}