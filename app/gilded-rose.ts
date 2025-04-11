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
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        let qualityDifference = 1;
        if (this.items[i].name.includes("Conjured")) {
          qualityDifference = 2;
        }
        if (this.items[i].sellIn <= 0) {
          qualityDifference *= 2;
        }

        if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert" && this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality >= qualityDifference ? (this.items[i].quality - qualityDifference) : 0;
        }

        if (this.items[i].name == "Aged Brie" && this.items[i].quality < 50) {
          this.items[i].quality = (this.items[i].quality + qualityDifference) <= 50 ? (this.items[i].quality + qualityDifference) : 50;
        }

        if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert" && this.items[i].quality < 50) {
          if (this.items[i].sellIn > 10) {
            this.items[i].quality += qualityDifference;
          } else if (5 < this.items[i].sellIn && this.items[i].sellIn <= 10) {
            this.items[i].quality = (this.items[i].quality + 2 * qualityDifference) <= 50 ? (this.items[i].quality + 2 * qualityDifference) : 50;
          } else if (0 < this.items[i].sellIn && this.items[i].sellIn <= 5) {
            this.items[i].quality = (this.items[i].quality + 3 * qualityDifference) <= 50 ? (this.items[i].quality + 3 * qualityDifference) : 50;
          } else {
            this.items[i].quality = 0;
          }
        }
        this.items[i].sellIn -= 1;
      }
    }
    return this.items;
  }
}
