import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should bar', () => {
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
    it('aged brie quality increases by 1', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(2);
    })

  it('aged brie quality remains at 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  })

  it('TAFKAL80ETC concert quality change when sellin expires', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 34)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  })

  it('TAFKAL80ETC concert quality change when sellin expires', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  })

});
