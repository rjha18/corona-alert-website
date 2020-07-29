from html.parser import HTMLParser
  2 import pycurl
  3 from io import BytesIO
  4 from bs4 import BeautifulSoup
  5 import re
  6 import sys
  7 import json
  8 
  9 def main():
 10 
 11     url = sys.argv[1]
 12     sentence_list = []
 13 
 14     buffer = BytesIO()
 15     c = pycurl.Curl()
 16     c.setopt(c.URL, url)
 17     c.setopt(c.WRITEDATA, buffer)
 18     c.perform()
 19     c.close()
 20 
 21     body = buffer.getvalue()
 22     # Body is a byte string.
 23     # We have to know the encoding in order to print it to a text file
 24     # such as standard output.
 25     html_text = body.decode("utf-8")
 26 
 27     parsed_html = BeautifulSoup(html_text, 'html.parser')
 28 
 29     img_arr = parsed_html.find_all("img")
 30     plain_text = img_arr[0].get('src').strip()
 31     if "/assets/" in plain_text :
 32         plain_text = "https://www.king5.com" + plain_text
 33     sentence_list.append(removeUnicode(plain_text))
 34 
 35     json_arr = json.dumps(sentence_list)
 36     print(json_arr)
 37 
 38     for a in sentence_list :
 39         print(a)
 40 
 41 
 42 def removeUnicode(str) :
 43     return str.replace(u"\u2014", "-").replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
 44 
 45 if __name__ == "__main__" :
 46     main()
