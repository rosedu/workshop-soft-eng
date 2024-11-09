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
	it('Sulfuras never decreases quality', ()=>{
		const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 20, 40)]);

		const items = gildedRose.updateQuality();

		expect(items[0].quality).toBe(40)
	})
	it('Aged Brie', ()=>{
		const gildedRose = new GildedRose([new Item('Aged Brie', 2, 40)]);

		const items = gildedRose.updateQuality();
		expect(items[0].quality).toBe(41)
	})

	it('Aged Brie as Concert', ()=>{
		const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)])

		const items = gildedRose.updateQuality();
		expect(items[0].quality).toBe(43)
	})
	it('Aged Brie as Concert 2', ()=>{
		const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)])

		const items = gildedRose.updateQuality();
		expect(items[0].quality).toBe(33)
	})
});
