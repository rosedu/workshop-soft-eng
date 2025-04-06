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

    modifyQualityIfSellInNegative(name: string, quality: number) {
        if (name != 'Aged Brie') {
            if (name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (quality > 0) {
                    if (name != 'Sulfuras, Hand of Ragnaros') {
                        quality--
                    }
                }
            } else {
                quality = 0
            }
        } else {
            if (quality < 50) {
                quality++
            }
        }
      return quality;
    }

    modifyQuality(name: string, sellIn: number ,quality: number) {
      quality = quality + 1
      if (name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (sellIn < 11) {
              if (quality < 50) {
                  quality++
              }
          }
          if (sellIn < 6) {
              if (quality < 50) {
                  quality++
              }
          }
      }
      return quality;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            var name: string = this.items[i].name;
            var sellIn: number = this.items[i].sellIn;
            var quality: number = this.items[i].quality;

            if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (quality > 0) {
                    if (name != 'Sulfuras, Hand of Ragnaros') {
                        quality--
                    }
                }
            } else if (quality < 50) {
                quality = this.modifyQuality(name, sellIn, quality)
            }

            if (name != 'Sulfuras, Hand of Ragnaros') {
                sellIn--;
            }
            if (sellIn < 0) {
                quality = this.modifyQualityIfSellInNegative(name, quality)
            }
          this.items[i].sellIn = sellIn;
          this.items[i].quality = quality;
        }
        return this.items;
    }
}
