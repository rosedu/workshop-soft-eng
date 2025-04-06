import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('bar', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('bar');
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('Quality degrading 2x after sell date passed', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', -3, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);
    })

    it('Item quality is never negative', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 2, -1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBeGreaterThanOrEqual(0);
    })

    it('Item quality is always less than 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 2, 55), new Item('Sulfuras item', 2, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      //Sulfuras is allowed to have quality > 50 (ALways 80, never alters)
      expect(items[1].quality).toBe(80);
      expect(items[0].quality).toBeLessThan(50);
    })

    it('Aged brie increases in quality', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 5)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(6);
      expect(items[1].quality).toBe(9);
    })

    it('Sulfuras never decreases in quality / is never sold', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(80);
    })

    it('Backstage passes quality changes differently', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes item', 8, 80),
                                         new Item('Backstage passes item', 2, 80),
                                         new Item('Backstage passes item', 0, 80),
      ]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(82);
      expect(items[1].quality).toBe(83);
      expect(items[0].quality).toBe(0);
      
    })

    it('Conjured items degrade 2x in quality', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Conjured Item', 8, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(78);      
    })

});
