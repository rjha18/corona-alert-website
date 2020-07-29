from html.parser import HTMLParser
import pycurl
from io import BytesIO
from bs4 import BeautifulSoup
import re
import sys 
import json

def main():

    url_arr = ["https://www.seattletimes.com/tag/coronavirus/", "https://www.king5.com/coronavirus-covid-19"]
    sentence_list = []

    for url in url_arr:
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

        for text in parsed_html.findAll("a", {"class": "results-story-image"}) :
            plain_text = text.get('href').rstrip()
            sentence_list.append(removeUnicode(plain_text))

        for text in parsed_html.findAll("a", {"class": "headline-list__title"}) :
            plain_text = ("https://www.king5.com" + text.get('href')).rstrip()
            sentence_list.append(removeUnicode(plain_text))


    json_data = []
    
    for url in sentence_list :
        text = getSentences(url)
        json_data.append(text)

    with open('data.json', 'w') as outfile :
        json.dump(json_data, outfile)



def removeUnicode(str) :
    return str.replace(u"\u2014", "-").replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')

def getSentences(url) :
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


    sentence_list = []

    for text in parsed_html.find_all('p') :
        plain_text = text.get_text().rstrip()
        arr = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', plain_text)
        if (len(plain_text) != 0) :
            for sentence in arr :
                sentence_list.append(removeUnicode(sentence))

    str = ""
    for x in sentence_list :
        str = str + x + " "

    return str


if __name__ == "__main__" :
    main()
