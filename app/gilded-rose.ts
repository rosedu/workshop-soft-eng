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
      if (!this.items[i].name.startsWith("Conjured")) {
        if (this.items[i].name != "Sulfuras") {
          if (this.items[i].quality > 50) this.items[i].quality = 50;
          if (
            this.items[i].name != "Aged Brie" &&
            this.items[i].name != "Backstage passes"
          ) {
            if (this.items[i].sellIn < 0) {
              if (this.items[i].quality > 0) this.items[i].quality -= 2;
              else this.items[i].quality = 0;
            }
          } else {
            if (this.items[i].name == "Aged Brie") {
              if (this.items[i].sellIn < 0)
                this.items[i].quality =
                  this.items[i].quality - this.items[i].sellIn;
            }
            if (this.items[i].name == "Backstage passes") {
              if (this.items[i].sellIn > 3 && this.items[i].sellIn < 10)
                this.items[i].quality += 2;
              if (this.items[i].sellIn < 5) this.items[i].quality += 3;
            }
          }
        }
      } else {
        if (this.items[i].quality) this.items[i].quality -= 4;
        else this.items[i].quality = 0;
      }
    }
    return this.items;
  }
}
