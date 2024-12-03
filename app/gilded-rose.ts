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

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.name == 'Sulfuras, Hand of Ragnaros') {
                continue;
            }

            item.sellIn -= 1;

            if (item.name == 'Aged Brie') {
                if (item.quality < 50) {
                    item.quality += 1;
                }
            } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < 50) {
                    item.quality += 1;
                }
				
				if (item.sellIn < 10) {
					if (item.quality < 50) {
						item.quality += 1;
					}
				}
				if (item.sellIn < 5) {
					if (item.quality < 50) {
						item.quality += 1;
					}
				}
            } else {
                if (item.quality > 0) {
                    item.quality -= 1;
                }
            }

            if (item.sellIn < 0) {
                if (item.name == 'Aged Brie') {
                    if (item.quality < 50) {
                        item.quality += 1;
                    }
                } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    item.quality = 0;
                } else {
                    if (item.quality > 0) {
                        item.quality -= 1;
                    }
                }
            }
        }

        return this.items;
    }
}