from asyncio.windows_events import NULL
from urllib.request import urlopen
from bs4 import BeautifulSoup
import webbrowser


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


# https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?


# get Yahoo Auction API key
def get_auc_api_key():
    url = "https://page.auctions.yahoo.co.jp/jp/auction/1041438083"
    html = urlopen(url).read()
    soup = BeautifulSoup(html, features="html.parser")

    # kill all script and style elements
    for script in soup(["script", "style"]):
        script.extract()    # rip it out
    
    # find element with id = "js-deliveryData" & get "data-eappid" value
    return soup.find(id='js-deliveryData').__getitem__("data-eappid")


# class requestbuilder(){}
base        = 'https://auctions.yahooapis.jp/AuctionWebService/V'
api_key     = '&eappid=' + get_auc_api_key()
method      = '2/json/search?'
                # '2/json/search?'
                # '1/json/ShowRating?'
                # '2/json/sellingList?'
                # '2/json/auctionItem?'
        

def get_filters():  # поменять на foreach потом
    method      = NULL # get
    query       = NULL # get
    categories  = NULL # get
    id          = NULL # get
    sellerID    = NULL # get
    auctionID   = NULL # get
    max_price   = NULL # get
    min_price   = NULL # get
    results     = NULL #


    query       = '&query='         + 'sega'       # ВЫДАЛ ОШИБКУ НА 'parcer','parser'; скорее всего просто пусто - сделать error handler
    results     = '&results='       + '20'
    category    = NULL#'&category='      + '2084264212'
    id          = NULL#'&id='            + 'tagusaya3812'
    sellerID    = NULL#'&sellerID='      + 'tagusaya3812'
    auctionID   = NULL#'&auctionID='     + 'b1040708048'


    filters = ''
    if type(id) == str:         filters += id
    if type(query) == str:      filters += query
    if type(results) == str:    filters += results
    if type(category) == str:   filters += category
    if type(sellerID) == str:   filters += sellerID
    if type(auctionID) == str:  filters += auctionID
    return filters


# OUTPUT JSON
def build_request():
    request = base + method + get_filters() + api_key
    return urlopen(request).read()

print(build_request())
