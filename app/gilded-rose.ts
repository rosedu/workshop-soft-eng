export class Item {
  name: string;
  sellIn: number;
  quality: number;

  static readonly MIN_SELL_IN = 0;
  static readonly MIN_QUALITY = 0;
  static readonly MAX_QUALITY = 50;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  /**
   * Update the quality of all items.
   *
   * "Backstage passes" – increase in quality as the sellIn date approaches.
   * "Conjured" – degrade in quality twice as fast.
   * "Aged Brie" – increases in quality as it gets older.
   * "Sulfuras" – not updated.
   *
   * @returns {Item[]} - The updated list of items.
   */
  updateQuality(): Item[] {
    this.items.forEach(item => {
      this.updateItem(item);
      item.sellIn = Math.max(Item.MIN_SELL_IN, item.sellIn);
      this.clampQuality(item);
    });
    return this.items;
  }

  /**
   * Update a single item's quality and sellIn value.
   * Sulfuras items are not updated.
   * 
   * @param {Item} item - The item to update.
   */
  private updateItem(item: Item): void {
    const name = item.name.toLowerCase();

    if (name.includes('sulfuras')) {
      this.clampQuality(item);
      item.sellIn = Math.max(Item.MIN_SELL_IN, item.sellIn);
      return;
    }

    if (name.includes('aged brie')) {
      this.updateAgedBrie(item);
    } else if (name.includes('backstage passes')) {
      this.updateBackstagePasses(item);
    } else if (name.includes('conjured')) {
      this.updateConjured(item);
    } else {
      this.updateNormal(item);
    }

    item.sellIn--;
  }

  private clampQuality(item: Item): void {
    item.quality = Math.max(Item.MIN_QUALITY, Math.min(Item.MAX_QUALITY, item.quality));
  }

  private updateNormal(item: Item): void {
    const factor = item.sellIn <= Item.MIN_SELL_IN ? 2 : 1;
    this.decrease(item, factor);
  }

  private updateConjured(item: Item): void {
    const factor = item.sellIn <= Item.MIN_SELL_IN ? 4 : 2;
    this.decrease(item, factor);
  }

  private updateAgedBrie(item: Item): void {
    const factor = item.sellIn <= Item.MIN_SELL_IN ? 2 : 1;
    this.increase(item, factor);
  }

  private updateBackstagePasses(item: Item): void {
    if (item.sellIn < 0) {
      item.quality = Item.MIN_QUALITY;
    } else if (item.sellIn <= 5) {
      this.increase(item, 3);
    } else if (item.sellIn <= 10) {
      this.increase(item, 2);
    } else {
      this.increase(item, 1);
    }
  }

  private increase(item: Item, amount: number): void {
    item.quality = Math.min(Item.MAX_QUALITY, item.quality + amount);
  }

  private decrease(item: Item, amount: number): void {
    item.quality = Math.max(Item.MIN_QUALITY, item.quality - amount);
  }
}
