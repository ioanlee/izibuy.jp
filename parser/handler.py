
from importlib_metadata import method_cache
import string
import json

import yahoo_auction
import yahoo_shopping
import amazon_japan
import rakuten
import config

# from subprocess import IDLE_PRIORITY_CLASS
# from bs4 import BeautifulSoup, SoupStrainer
# from requests_html import HTMLSession
# # https://shopping.yahoo.co.jp/search?p=soup

# import requests

# # getdata(url)
# # print(getdata(url).find_all('a'))


# only_products = SoupStrainer(class_ = 'LoopList__item')

# s = HTMLSession()
# url = 'https://shopping.yahoo.co.jp/search?p=soup'
# # url = 'https://store.shopping.yahoo.co.jp/hiroba/24301140.html?sc_i=shp_pc_search_itemlist_shsrg_img'

# def getdata(url):
#     r = s.get(url)
#     soup = BeautifulSoup(r.text, 'html.parser', parse_only=only_products)
#     # soup = BeautifulSoup(r.text, 'html.parser')
#     return soup.find('a')

# print('<div>')
# output = str(getdata(url))
# print(output)
# print('</div>')








# https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-&query=soup&
# https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?

# deprecated


# start here

def get_gallery_urls_large():
    return json

def get_gallery_urls_small():
    return json

def get_thumbnail_url():
    return string

def get_title():
    return string

def get_description():
    return string

def get_auction_list():
    return json

def get_url():
    return string

def get_price():
    return float
    
def get_category():
    return json


def get_item_data_full():
    get_price()
    get_title()
    get_gallery_urls_large()
    get_description()
    get_url()    # для кнопки
    get_category()

def get_item_data_preview():
    get_price()
    get_title()
    get_gallery_urls_small()
    get_description()
    get_url()    # для кнопки
    get_category()

def get_item_data_minimized():
    get_price()
    get_title()
    get_thumbnail_url()


# auction requests

# https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?eappid=30ezxaetmbwDBBaDmvnSR78UCecuEdV_gousH5MM.LWEcNnBdRG__kaeA8_J2QUYCHFz4Av.V03IHNdnW1EzGSeZtCpB9kHt1Mmaou.8Pv5AwtM-&query=soup
# https://auctions.yahoo.co.jp/jp/show/bid_hist?aID=u1041574820
# https://auctions.yahoo.co.jp/guide/deliver/index.html#deliverList

# key:
    # &eappid=XXXXXXXXXX
# поиск по продавцу:               https://auctions.yahooapis.jp/AuctionWebService/V2/json/sellingList?sellerID=tagusaya3812 + key
# поиск по слову 'soup':           https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?query=soup + key
# поиск по категории и слову:      https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?query=soup&category=2084264212 + key

# https://auctions.yahooapis.jp/AuctionWebService/V1/json/ShowRating?          id=tagusaya3812
# https://auctions.yahooapis.jp/AuctionWebService/V2/json/sellingList?         sellerID=tagusaya3812
# https://auctions.yahooapis.jp/AuctionWebService/V2/json/auctionItem?         auctionID=b1040708048
# https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?              query=soup                   category=2084264212


# shopping requests

# https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?
    # appid              = dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    # &genre_category_id = 635
    # &sort              = -sold