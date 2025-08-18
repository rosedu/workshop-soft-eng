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

    it('quality goes 0 on name \'Backstage passes to a TAFKAL80ETC concert\' and sellIn <= 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, -4)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('name == \'Aged Brie\'', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 49), new Item('Aged Brie', 0, 48), new Item('Aged Brie', 0, 70)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
      expect(items[1].quality).toBe(50);
      expect(items[2].quality).toBe(70);
    })

    it('name == \'Backstage passes to a TAFKAL80ETC concert\'', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47), 
                                         new Item('Backstage passes to a TAFKAL80ETC concert', 7, 45), 
                                         new Item('Backstage passes to a TAFKAL80ETC concert', 7, 70)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
      expect(items[1].quality).toBe(47);
      expect(items[2].quality).toBe(70);
    })

    it('name == \'Sulfuras, Hand of Ragnaros\'', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 48)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(48);
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
