import { Item, GildedRose } from '@/gilded-rose-refactor';

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
      const gildedRose = new GildedRose([new Item('Sword', 1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

    it('quality goes 0 on name Backstage passes to a TAFKAL80ETC concert and saleIn < 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('sellIn decrease if name != Sulfuras, Hand of Ragnaros', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 2), new Item('Sulfuras, Hand of Ragnaros', 1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(0);
      expect(items[1].sellIn).toBe(1);
    })

    it('quality > 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48), new Item('Backstage passes to a TAFKAL80ETC concert', 7, 48)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
      expect(items[1].quality).toBe(50);
    })

    it('foo name', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('foo', 5, 50)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(49);
    })
});
