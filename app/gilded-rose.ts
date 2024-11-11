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

    updateConcertTicket(item: Item) {
        item.quality += 1
        if (item.sellIn < 11)
            item.quality +=  1

        if (item.sellIn < 6)
            item.quality +=  1

        if (item.quality >= 50)
            item.quality = 50
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == 'Sulfuras, Hand of Ragnaros')
                break

            this.items[i].sellIn -= 1

            if (this.items[i].quality == 50 || this.items[i].quality == 0)
                break

            if (this.items[i].name == 'Aged Brie') {
                this.items[i].quality += 1
                break
            } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.updateConcertTicket(this.items[i])
            } else if (this.items[i].name == 'Conjured') {
                this.items[i].quality -=  2
            } else {
                this.items[i].quality -=  1
            }

            if (this.items[i].sellIn < 0) {
                if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert')
                    this.items[i].quality = 0
            }

        }

        return this.items;
    }
}
