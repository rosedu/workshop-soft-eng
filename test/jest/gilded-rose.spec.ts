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

    it('Brie', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Brie', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);

    })

    it('Brie quality', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 49)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);

    })

    it('TAFKAL80ETC', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);

    })

    it('TAFKAL80ETC2', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 51)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(51);

    })

    it('TAFKAL80ETC3', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);

    })

    it('testx', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -10, 100)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);

    })

    it('testy', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', -1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(8);

    })
});
