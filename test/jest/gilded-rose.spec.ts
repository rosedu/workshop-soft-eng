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
      const gildedRose = new GildedRose([new Item('Sword', 1, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

  it('should foo', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(80);
  });

});
