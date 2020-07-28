from html.parser import HTMLParser
import pycurl
from io import BytesIO
from bs4 import BeautifulSoup
import re
import sys
import json

def main():

    url = sys.argv[1]

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
    html_text = body.decode()

    parsed_html = BeautifulSoup(html_text, 'html.parser')


    sentence_list = []

    for text in parsed_html.find_all('p') :
        plain_text = text.get_text().rstrip()
        arr = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', plain_text)
        if (len(plain_text) != 0) :
            for sentence in arr :
                sentence_list.append(sentence)

    json_arr = json.dumps(sentence_list)
    print(json_arr)


if __name__ == "__main__" :
    main()
