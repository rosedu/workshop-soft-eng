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

    it('Backstage passes to a TAFKAL80ETC concert', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage', 2, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(1);
    })

  it('not bigger than 50', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(42);
  })


  it('dext', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(39);
  })

  it('brie', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(41);
  })

  it('elixir', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(39);
  })

  it('backsage', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(43);
  })



  it('conjured', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(39);
  })

  it('conjoured mic 0', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  })

  it('dext mic 0', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', -1, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(38);
  })

  it('elixir mic 0', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', -1, 10)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(8);
  })


});
