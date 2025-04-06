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
      const item = this.items[i];

      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--;

        if (this.items[i].name == 'Aged Brie') {
          if (item.quality < 50)
            item.quality++;
          if (item.sellIn < 0 && item.quality < 50)
            item.quality++;

        } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 0) {
            item.quality = 0;
          } else if (item.sellIn < 5) {
            item.quality = Math.min(item.quality + 3, 50);
          } else if (item.sellIn < 10) {
            item.quality = Math.min(item.quality + 2, 50);
          } else {
            if (item.quality < 50) item.quality++;
          }

        } else {
          let degradeRate;
          if (item.name == 'Conjured Mana Cake')
            degradeRate = 2;
          else
            degradeRate = 1;

          if (item.sellIn < 0)
            degradeRate *= 2;

          item.quality = Math.max(item.quality - degradeRate, 0);
        }
      }
    }
    return this.items;
  }
}
