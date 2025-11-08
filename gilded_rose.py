# -*- coding: utf-8 -*-

class GildedRose(object):

    def __init__(self, items):
        self.items = items
        for it in self.items:
            self.clip(it)

    def clip(self, it):
        if it.name == "Sulfuras, Hand of Ragnaros":
            return

        if it.quality < 0:
            it.quality = 0
        elif it.quality > 50:
            it.quality = 50

    def handle_special_item(self, item) -> bool:
        item.sell_in -= 1

        # handle aged brie
        if item.name == "Aged Brie":
            item.quality += 1
            return True
        # handle passes
        elif "Backstage passes" in item.name:
            # apply rules for backstage passes quality
            if item.sell_in <= 0:
                item.quality = 0
            elif item.sell_in <= 5:
                item.quality += 3
            elif item.sell_in <= 10:
                item.quality += 2
            else:
                item.quality += 1

            return True
        # handle sulfuras
        elif item.name == "Sulfuras, Hand of Ragnaros":
            item.sell_in += 1
            return True
        else:
            return False

    def handle_regular_item(self, item) -> None:
        item.sell_in -= 1
        expired_multiplier = 1

        if item.sell_in  < 0:
            expired_multiplier = 2
        
        if "Conjured" in item.name:
            item.quality -= 2 * expired_multiplier
        else:
            item.quality -= 1 * expired_multiplier

    def update_quality(self) -> None:
        for it in self.items:
            is_special = self.handle_special_item(it)

            if is_special:
                pass
            else:
                self.handle_regular_item(it)

            self.clip(it)

class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
