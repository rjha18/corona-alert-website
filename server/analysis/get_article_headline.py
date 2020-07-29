from html.parser import HTMLParser
import pycurl
from io import BytesIO
from bs4 import BeautifulSoup
import re
import sys 
import json

def main():

    url = sys.argv[1]
    sentence_list = []
    
    buffer = BytesIO()
    c = pycurl.Curl()
    c.setopt(c.URL, url)
    c.setopt(c.WRITEDATA, buffer)
    c.perform()
    c.close()

    body = buffer.getvalue()
    # Body is a byte string.
    # We have to know the encoding in order to print it to a text file
    # such as standard output.
    html_text = body.decode("utf-8")

    parsed_html = BeautifulSoup(html_text, 'html.parser')


    for text in parsed_html.findAll("h1", {"class": "article-title p-name entry-title"}) :
        plain_text = text.get_text().strip()
        sentence_list.append(removeUnicode(plain_text))

    for text in parsed_html.findAll("h1", {"class": "article__headline"}) :
        plain_text = text.get_text().strip()
        sentence_list.append(removeUnicode(plain_text))

    json_arr = json.dumps(sentence_list)
    print(json_arr)

    for a in sentence_list :
        print(a)


def removeUnicode(str) :
    return str.replace(u"\u2014", "-").replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')

if __name__ == "__main__" :
    main()
