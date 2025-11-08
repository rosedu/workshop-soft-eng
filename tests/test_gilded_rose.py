# -*- coding: utf-8 -*-
import unittest

from gilded_rose import Item, GildedRose


class GildedRoseTest(unittest.TestCase):
    def setUp(self):
        self.regular_items = [
            Item("CPU Components", 3, 12),
            Item("Mega Trash", -2, -10),
            Item("Trash", 1, -10),
            Item("\"As I\'ve Written\"", 30, 100),
            Item("Cheese of Truth", 10, 20),
            Item("Rotten Apples", -10, -50)
        ]
        self.conjured_items = [ 
            Item("Conjured Burger", 13, 13),
            Item("Conjured +3 Fire DMG Ring", 40, 60),
            Item("Conjured Cursed Tome", 100, 30)
        ]
        self.backstage_pass_items = [
            Item("Backstage passes to Gandalf concert", 9, 30),
            Item("Backstage passes to Haggard concert", 15, 10),
            Item("Backstage passes to Conjured Guitarists concert", 5, 0),
            Item("Backstage passes to HelloWorld concert", 0, 33)
        ]
        self.aged_brie_items = [
            Item("Aged Brie", 5, 12),
            Item("Aged Brie", -10, -100)
        ]

        self.sulfuras_items = [
            Item("Sulfuras, Hand of Ragnaros", 100, 60),
            Item("Sulfuras, Hand of Ragnaros", 999, 60)
        ]


    def test_foo(self):
        items = [Item("foo", 0, 0)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEqual("foo", items[0].name)

    # this checks if all items degrade according to the list [11, 0, 0, 49, 19, 0]
    def test_regular_items(self):
        gilded_rose = GildedRose(self.regular_items)
        values_list = [11, 0, 0, 49, 19, 0]

        gilded_rose.update_quality()
        self.assertListEqual(values_list, [ it.quality for it in self.regular_items ])

    def test_brie(self):
        gilded_rose = GildedRose(self.aged_brie_items)
        values_list = [13, 1]

        gilded_rose.update_quality()
        self.assertListEqual(values_list, [ it.quality for it in self.aged_brie_items ])

    def test_conjured_items(self):
        gilded_rose = GildedRose(self.conjured_items)
        values_list = [11, 48, 28]

        gilded_rose.update_quality()
        self.assertListEqual(values_list, [ it.quality for it in self.conjured_items ])

    def test_backstage_passes(self):
        gilded_rose = GildedRose(self.backstage_pass_items)
        values_list = [32, 11, 3, 0]

        gilded_rose.update_quality()
        self.assertListEqual(values_list, [ it.quality for it in self.backstage_pass_items ])

    def test_sulfuras(self):
        gilded_rose = GildedRose(self.sulfuras_items)
        values_list = [60, 60]

        gilded_rose.update_quality()
        self.assertListEqual(values_list, [ it.quality for it in self.sulfuras_items ])
        
if __name__ == '__main__':
    unittest.main()
