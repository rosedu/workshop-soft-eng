import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
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

    it('sell date did not pass', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(9);
    })

    it('sell date passed', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 0, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    })

    it('sell date did not pass', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(9);
    })

    it('sell date passed - update 2 times', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 1, 10)]);

      // Act
      let items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(9);

      // Act
      items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(7);
    })

    it('quality is never negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('Aged Brie quality after sell date passed', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 10)]);

      // Act
      let items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(11);

      // Act
      items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(13);
    })

    it('quality is under 50', () => {
      // Arrange
      let gildedRose = new GildedRose([new Item('foo', 2, 50)]);

      // Act
      let items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(49);

      // Arrange
      gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);

      // Act
      items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);

      // Arrange
      gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 48)]);

      // Act
      items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
    })

    it('sulfuras', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 48)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(48);
    })

    it('backstage passes', () => {
      // Arrange
      let sellIn = 12;
      let quality = 10;
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)]);

      // Act
      let items;

      // Assert
      while (sellIn > 0) {
        items = gildedRose.updateQuality();
        
        if (sellIn <= 5) {
          quality = quality + 3;
        } else if (sellIn <= 10) {
          quality = quality + 2;
        } else {
          quality = quality + 1;
        }
        sellIn--;
        expect(items[0].sellIn).toBe(sellIn);
        expect(items[0].quality).toBe(quality);
      }

      items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    })

    it('conjured', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured', 12, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
  });


});
