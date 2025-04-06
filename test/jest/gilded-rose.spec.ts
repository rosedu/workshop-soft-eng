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
    it('test1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(42);
  });
  it('test2', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(40);
  });
  it('test3', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(41);
  });
  it('test4', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(41);
  });
  it('test5', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(39);
  });
  it('test6', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 1, 40)]);
    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(39);
  });
  it('test7', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Dexterity Vest', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(39);
  });
  it('test8', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', -1 , 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(38);
  });
  it('test9', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(9);
  });
  it('test10', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(9);
  });
  it('test11', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(9);
  });
  
  it('test12', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(9);
  });

  it('test13', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Dexterity Vest', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(9);
  });

  it('test14', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(41);
  });

});
