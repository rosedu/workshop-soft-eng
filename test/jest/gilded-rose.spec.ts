import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should keep the same name', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('foo');
    });

    it('sword quality drops by 1', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('Sword', 1, 10)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].quality).toBe(9);
    });

    it('conjured item quality drops by 2 before sell date', () => {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 6)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(4);
    });

    it('conjured item quality drops by 4 after sell date', () => {
        const gildedRose = new GildedRose([new Item('Conjured Bread', 0, 6)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(2);
    });
});
