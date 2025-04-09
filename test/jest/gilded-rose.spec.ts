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


    it('My test 1 - Expect Aged Brie to increase in quality by 2 in 2 days ', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 149)]);

      // Act
      let items = gildedRose.updateQuality();
      items = gildedRose.updateQuality();
      // Assert
      expect(items[0].quality).toBe(151);
    })
});
