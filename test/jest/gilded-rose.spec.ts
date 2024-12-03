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
	it('Aged Brie increases in quality', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(1);
	});

	it('Sulfuras never decreases in quality', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(80);
	});

	it('Backstage passes increase in quality by 2 when there are 10 days or less', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(22);
	});

	it('Backstage passes increase in quality by 3 when there are 5 days or less', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(23);
	});

	it('Backstage passes drop to 0 quality after the concert', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(0);
	});

	it('Conjured items degrade in quality twice as fast', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 6)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(5);
	});

	it('Sell by date has passed, quality degrades twice as fast', () => {
		// Arrange
		const gildedRose = new GildedRose([new Item('anything', 0, 10)]);

		// Act
		const items = gildedRose.updateQuality();

		// Assert
		expect(items[0].quality).toBe(8);
	});
	it('Conjured Aged')
});
