# -*- coding: utf-8 -*-
import unittest

from gilded_rose import Item, GildedRose


class GildedRoseTest(unittest.TestCase):
    def test_foo(self):
        items = [Item("foo", 0, 0)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEqual("foo", items[0].name)

    def test_normal_degrades(self):
        items = [Item("Normal Item", 10, 20)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEqual(19, items[0].quality)
        self.assertEqual(9, items[0].sell_in)

    def test_aged_brie_increases(self):
            items = [Item("Aged Brie", 10, 20)]
            gilded_rose = GildedRose(items)
            gilded_rose.update_quality()
            self.assertEqual(21, items[0].quality)

    def test_sulfuras_never_changes(self):
            items = [Item("Sulfuras, Hand of Ragnaros", 0, 80)]
            gilded_rose = GildedRose(items)
            gilded_rose.update_quality()
            self.assertEqual(80, items[0].quality)
            self.assertEqual(0, items[0].sell_in)

    def test_backstage_pass_increases_by_3_when_5_days_or_less(self):
            items = [Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]
            gilded_rose = GildedRose(items)
            gilded_rose.update_quality()
            self.assertEqual(23, items[0].quality)

    def test_conjured_degrades_twice_as_fast(self):
            items = [Item("Conjured Mana Cake", 10, 20)]
            gilded_rose = GildedRose(items)
            gilded_rose.update_quality()
            self.assertEqual(18, items[0].quality)
            self.assertEqual(9, items[0].sell_in)

    def test_conjured_degrades_four_times_after_sellby(self):
            items = [Item("Conjured Mana Cake", 0, 20)]
            gilded_rose = GildedRose(items)
            gilded_rose.update_quality()
            self.assertEqual(16, items[0].quality)

        
if __name__ == '__main__':
    unittest.main()
