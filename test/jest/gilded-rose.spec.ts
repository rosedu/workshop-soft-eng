import { Item, GildedRose } from '@/gilded-rose';

describe('General Items', () => {
  it('name remains unchanged', () => {
    const gr = new GildedRose([new Item('foo', 5, 10)]);
    const items = gr.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('Sword: quality decreases by 1 and sellIn decreases', () => {
    const gr = new GildedRose([new Item('Sword', 1, 2)]);
    const items = gr.updateQuality();
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(0);
  });

  it('Vest: normal item update (sellIn > 0)', () => {
    const gr = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it('Elixir: normal item update (sellIn > 0)', () => {
    const gr = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
  });

  it('Griphon Wings: normal item update (sellIn > 0)', () => {
    const gr = new GildedRose([new Item("Griphon Wings", 5, 42)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(41);
  });

  it('Normal Item: update when sellIn > 0', () => {
    const gr = new GildedRose([new Item("Normal Item", 3, 6)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(5);
  });

  it('Normal Item: update when sellIn is 0 (quality decreases by 2)', () => {
    const gr = new GildedRose([new Item("Normal Item", 0, 6)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(4);
  });

  it('should clamp quality to MAX if above maximum', () => {
    const gr = new GildedRose([new Item("Normal Item", 5, 60)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });
});

describe('Aged Brie', () => {
  it('basic update', () => {
    const gr = new GildedRose([new Item("Aged Brie", 2, 0)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it('sellIn positive: quality increases by 1', () => {
    const gr = new GildedRose([new Item("Aged Brie", 5, 10)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(11);
  });

  it('sellIn 0: quality increases by 2', () => {
    const gr = new GildedRose([new Item("Aged Brie", 0, 10)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(12);
  });

  it('quality is capped at MAX', () => {
    const gr = new GildedRose([new Item("Aged Brie", 1, 49)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
});

describe('Sulfuras', () => {
  it('negative sellIn: clamped to 0 and quality clamped to MAX', () => {
    const gr = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });

  it('sellIn 0: remains unchanged', () => {
    const gr = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });

  it('positive sellIn: remains unchanged', () => {
    const gr = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 60)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(50);
  });
});

describe('Backstage Passes', () => {
  it('sellIn > 10: quality increases by 1', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });

  it('sellIn exactly 10: quality increases by 2', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  it('sellIn <= 5: quality increases by 3', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL82ETC concert", 5, 49)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });

  it('sellIn 0: sellIn remains 0 and quality increases by 3', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL83ETC concert", 0, 5)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(8);
  });

  it('sellIn < 0: sellIn and quality are clamped to 0', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL84ETC concert", -1, 9)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });

  it('other case: update pass normally', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL85ETC concert", 4, 0)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(3);
  });

  it('max cap: quality does not exceed MAX', () => {
    const gr = new GildedRose([new Item("Backstage passes to a TAFKAL86ETC concert", 8, 50)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(50);
  });
});

describe('Conjured Items', () => {
  it('case 1: decrease quality by 4 when sellIn <= 0', () => {
    const gr = new GildedRose([new Item("Conjured Mana Cake", 0, 6)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
  });

  it('case 2: decrease quality by 2 when sellIn > 0', () => {
    const gr = new GildedRose([new Item("Conjured Mana Cake", 4, 7)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(5);
  });

  it('should not go negative quality', () => {
    const gr = new GildedRose([new Item("Conjured Mana Cake", 0, -1)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });

  it('should cap quality at MIN for conjured items', () => {
    const gr = new GildedRose([new Item("Conjured Mana Cake", 0, 1)]);
    const items = gr.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
});
