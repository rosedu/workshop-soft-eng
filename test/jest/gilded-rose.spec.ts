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
    });
    it('conjured quality drops by 2', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 7, 4)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].quality).toBe(2);
    });
  it('sulfuras quality does not drop', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(80);
  });
  it('sulfuras sellIn does not decrease', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(5);
  });
  it('sword sellIn decreases', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('sword', 7, 17)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(6);
  });
  it('brie quality limit at 50', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 7, 50)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(50);
  });
  it('backstage quality zero after concert', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });

});
