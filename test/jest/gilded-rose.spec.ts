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

  it('sword quality increases by two when name is Backstage passes to a TAFKAL80ETC concert and sellIn lt 6 and quality lt 50', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(3);
  })

  it('sword', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(3);
  })

  it('sword1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(7);
  })

  it('sellin < 0', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sword', 0, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  })

  it('sellin < 0, quality increases by 1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sword', 0, 49)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(47);
  })

  it('sellin < 0, quality remains the same', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sword', 0, 55)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(53);
  })

  it('sellin < 0, quality remains the same', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 55)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(55);
  })

  it('sellin < 0, quality remains the same', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sword', 1, 55)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(0);
  })

  it('should return', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('bar', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items.length).toBe(1);
  });

  it('should returnn', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('bar', 2, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(0);
  });

  // it('conjured items degrade in quality twice as fast', () => {
  //   // Arrange
  //   const gildedRose = new GildedRose([new Item('ConjuredItem', 1, 55)]);
  //
  //   // Act
  //   const items = gildedRose.updateQuality();
  //
  //   // Assert
  //   expect(items[0].quality).toBe(53);
  // });

});
