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

    /*updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }*/

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      //first we will tacke the Sulfuras special item, as is not modified in any way
      if(this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        continue;

      } else if (this.items[i].name == 'Aged Brie' || this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
        //modify items that increase in quality
        if(this.items[i].name == 'Aged Brie')
          this.items[i].quality = Math.min(50, this.items[i].quality + 1);
        else {
          if(this.items[i].sellIn > 10)
            this.items[i].quality ++;

          else if (this.items[i].sellIn > 5 && this.items[i].sellIn <= 10)
            this.items[i].quality = Math.min(50, this.items[i].quality + 2);

          else if (this.items[i]. sellIn > 0 && this.items[i].sellIn <= 5)
            this.items[i].quality = Math.min(50, this.items[i].quality + 3);

          else
            this.items[i].quality = 0;
        }
          this.items[i].sellIn --;

      } else if (this.items[i].name.includes("Conjured")) {
        //modify items that are conjured
        if(this.items[i].sellIn > 0)
          this.items[i].quality = Math.max(0, this.items[i].quality - 2);
        else
          this.items[i].quality = Math.max(0, this.items[i].quality - 4);
        this.items[i].sellIn --;

      } else {
        //modify normal items
        if(this.items[i].sellIn > 0)
          this.items[i].quality = Math.max(0, this.items[i].quality - 1);
        else
          this.items[i].quality = Math.max(0, this.items[i].quality - 2);
        this.items[i].sellIn --;
      }
    }
    return this.items;
  }
}
