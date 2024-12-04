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

    it('sword did not sell', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 4)]);

      // Act
      const items = gildedRose.updateQuality();
      gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

    it('two items', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1), new Item('Beer', 1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
      expect(items[1].quality).toBe(1);
    })

    it('three items, sulfuras', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 3, 1), new Item('Beer', 1, 5), new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);

      // Act
      const items = gildedRose.updateQuality();
      gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
      expect(items[1].quality).toBe(2);
      expect(items[2].quality).toBe(80);
      expect(items[2].sellIn).toBe(1);
      expect(items[1].sellIn).toBe(-1);
      expect(items[0].sellIn).toBe(1);
    })
});
