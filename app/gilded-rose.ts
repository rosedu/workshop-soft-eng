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

    increaseQuality(item: Item, maxQuality: number) {
        if (item.quality < maxQuality) {
            item.quality += 1;
        }
    }

    decreaseQuality(item: Item, minQuality: number) {
        if (item.quality > minQuality) {
            item.quality -= 1;
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            // Sulfuras does not drop in value
            if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
                continue
            }

            // Decrease the expiration date
            this.items[i].sellIn = this.items[i].sellIn - 1;

            // Increase the value of brie
            if (this.items[i].name == 'Aged Brie') {
                this.increaseQuality(this.items[i], 50);

                if (this.items[i].sellIn < 0) {
                    this.increaseQuality(this.items[i], 50);
                }

                continue
            }

            // Increase value based on concert date
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.increaseQuality(this.items[i], 50);

                if (this.items[i].sellIn < 0) {
                    this.items[i].quality = 0;
                    continue
                }

                if (this.items[i].sellIn < 11) {
                    this.increaseQuality(this.items[i], 50);
                }

                if (this.items[i].sellIn < 6) {
                    this.increaseQuality(this.items[i], 50);
                }

                continue;
            }

            // Decrease value again for conjured items
            if (this.items[i].name.toLowerCase().indexOf('conjured') != -1) {
                this.decreaseQuality(this.items[i], 0);
            }

            // Decrease value of default items
            this.decreaseQuality(this.items[i], 0);
            if (this.items[i].sellIn < 0) {
                this.decreaseQuality(this.items[i], 0);
            }
        }

        return this.items;
    }
}
