import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrang
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('foo');
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('quality cannot be negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 1, 0)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('sell date passed, quality drops by 2', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 0, 2)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('Aged Brie quality increases by 1, sellin(positive) decreases by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(2);
      expect(items[0].sellIn).toBe(0);
    })

    it('Aged Brie quality increases by 2, sellin(negative) decreases by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', -1, 1)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(-2);
    })

    it('quality cannot be more than 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(50);
    })

    it('Sulfuras quality is 80, sellin doesnt decrease', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(1);
    })

    it('Backstage passes quality changes based on sellin', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(21);
      expect(items[0].sellIn).toBe(14);

      // Arrange
      const gildedRose2 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
      // Act
      const items2 = gildedRose2.updateQuality();
      // Assert
      expect(items2[0].quality).toBe(22);
      expect(items2[0].sellIn).toBe(9);

      // Arrange
      const gildedRose3 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
      // Act
      const items3 = gildedRose3.updateQuality();
      // Assert
      expect(items3[0].quality).toBe(23);
      expect(items3[0].sellIn).toBe(4);

      // Arrange
      const gildedRose4 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
      // Act
      const items4 = gildedRose4.updateQuality();
      // Assert
      expect(items4[0].quality).toBe(0);
      expect(items4[0].sellIn).toBe(-1);
    })

    it('Conjured items quality drops by 2', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 1, 2)]);
      // Act
      const items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(0);

      // Arrange
      const gildedRose2 = new GildedRose([new Item('Conjured Mana Cake', 0, 1)]);
      // Act
      const items2 = gildedRose2.updateQuality();
      // Assert
      expect(items2[0].quality).toBe(0);
    })

    it('Backstage passes iterative tests', () => {
      let sellIn = 12;
      let quality = 10;
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)]);
      // Act
      let items;

      //Assert
      while (sellIn > 0) {
        items = gildedRose.updateQuality();
        if (sellIn <= 5) {
          quality += 3;
        } else if (sellIn <= 10) {
          quality += 2;
        } else {
          quality++;
        }
        sellIn--;
        expect(items[0].quality).toBe(quality);
        expect(items[0].sellIn).toBe(sellIn);
      }
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    })

  });
