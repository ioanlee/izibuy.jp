# from asyncio.windows_events import NULL
# from types import NoneType
# import webbrowser

# urlstart        = 'https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?'
# apikey          = config.get_yahoo_shop_key()
# query           = 'soup'
# affiliate_type  = ''
# affiliate_id    = ''


# def add_filter(filter, value):
#     return filter + '=' + value + '&'

# url = urlstart + add_filter('appid', apikey) + add_filter('query',query)
# # url = urlstart + 'appid=' + apikey + '&' + add_filter(query)

# webbrowser.open(url, new = 0, autoraise = True)