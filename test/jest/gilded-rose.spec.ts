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

  it('sword quality drops by 2', () => {
    const gildedRose = new GildedRose([new Item('Sword', 4, 2)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(3);
  });

  it('sword sellIn drops by 1', () => {
    const gildedRose = new GildedRose([new Item('Sword', 0, 6)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(4);
  });

  it('aged brie quality increases by 1', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 3, 6)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(7);
  });

  it('normal item: quality degrades twice as fast after sellIn date', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 0, 6)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(4);
  });

  it('quality is never negative', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 5, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie quality never exceeds 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(50);
  });

  it('Sulfuras does not change in quality or sellIn', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it('Backstage passes increase in quality by 1 when more than 10 days left', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(21);
  });

  it('Backstage passes increase in quality by 2 when 10 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(27);
  });

  it('Backstage passes increase in quality by 3 when 5 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 25)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(28);
  });

  it('Backstage passes quality drops to 0 after concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });

  it('Conjured items degrade in quality twice as fast', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 6)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(4);
  });

  it('Conjured items degrade in quality by 4 after sellIn date', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 6)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(2);
  });


});
