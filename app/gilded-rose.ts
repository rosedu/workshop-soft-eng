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

  updateQuality(): Array<Item> {
    this.items.map((item) => this.updateItemQuality(item));

    return this.items;
  }

  updateItemQuality(item: Item): Item {
    if (item.name.indexOf("Sulfuras") != -1) {
      return item;
    }

    let sellIn = item.sellIn;
    let quality = item.quality;

    const sellInMultiplier = sellIn <= 0 ? 2 : 1;

    const Modifiers = {
      normal: (quality > 0 ? -1 : 0) * sellInMultiplier,
      conjured: (quality > 0 ? -2 : 0) * sellInMultiplier,
      brie: quality < 50 ? (quality < 49 && sellIn <= 0 ? 2 : 1) : 0,
      backstage_pass:
        sellIn == 0
          ? -quality
          : quality < 50
            ? sellIn < 11
              ? sellIn < 6
                ? 3
                : 2
              : 1
            : 0,
    };

    let modifier: number;

    if (item.name.indexOf("Conjured") != -1) {
      modifier = Modifiers.conjured;
    } else if (item.name.indexOf("Brie") != -1) {
      modifier = Modifiers.brie;
    } else if (item.name.indexOf("Backstage") != -1) {
      modifier = Modifiers.backstage_pass;
    } else {
      modifier = Modifiers.normal;
    }

    item.sellIn = sellIn - 1;
    item.quality = quality + modifier;

    return item;
  }
}
