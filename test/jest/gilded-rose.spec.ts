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

    it('should shaorma', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('shaorma', 4, 30),new Item('shaorma2', -1, 30)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBeGreaterThan(10);
      expect(items[1].quality).toBeGreaterThan(10);
      expect(items[0].name).toBe('shaorma');
      expect(items[1].name).toBe('shaorma2');
    })
    it('aaged brie', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBeGreaterThan(10);
      expect(items[0].name).toBe('Aged Brie');
    })
    it('backstage passes', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
      expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    })
    it('backstage passes 2', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
      expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    })
});
