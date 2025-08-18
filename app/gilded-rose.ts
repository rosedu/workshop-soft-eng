enum ItemType {
  NORMAL,
  AGED_BRIE,
  BACKSTAGE_PASS,
  SULFURAS
}

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality(): Item[] {
    return this.items.map(item => this.updateItemQuality(item));
  }

  private updateItemQuality(item: Item): Item {
    switch (this.getItemType(item)) {
      case ItemType.AGED_BRIE:
        return this.updateAgedBrie(item);
      case ItemType.BACKSTAGE_PASS:
        return this.updateBackstagePasses(item);
      case ItemType.SULFURAS:
        return item;
      default:
        return this.updateNormalItem(item);
    }
  }

  private getItemType(item: Item): ItemType {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return ItemType.SULFURAS;
    if (item.name === 'Aged Brie') return ItemType.AGED_BRIE;
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') return ItemType.BACKSTAGE_PASS;
    return ItemType.NORMAL;
  }

  private updateNormalItem(item: Item): Item {
    item.sellIn--;

    if (item.quality > 0) {
      item.quality--;
    }

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }

    return this.ensureQualityInRange(item);
  }

  private updateAgedBrie(item: Item): Item {
    item.sellIn--;

    if (item.quality < 50) {
      item.quality++;
    }

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }

    return this.ensureQualityInRange(item);
  }

  private updateBackstagePasses(item: Item): Item {
    item.sellIn--;

    if (item.quality < 50) {
      item.quality++;

      if (item.sellIn < 11 && item.quality < 50) {
        item.quality++;
      }

      if (item.sellIn < 6 && item.quality < 50) {
        item.quality++;
      }
    }

    if (item.sellIn < 0) {
      item.quality = 0;
    }

    return this.ensureQualityInRange(item);
  }

  private ensureQualityInRange(item: Item): Item {
    item.quality = Math.max(0, Math.min(50, item.quality));
    return item;
  }
}
