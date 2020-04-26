import requests
from bs4 import BeautifulSoup

urlWorld = 'https://www.worldometers.info/coronavirus/'
urlindia = 'https://www.worldometers.info/coronavirus/country/india/'
r = requests.get(urlWorld)
soup = BeautifulSoup(r.text, "html.parser")

world = {}
india = {}

b = soup.find_all("div", {"class": "maincounter-number"})

for i,mother_comp in enumerate(b,start=0):
    if i==0:
        world['totalcases'] = mother_comp.span.text

    if i==1:
        world['deaths'] = mother_comp.span.text

    if i==2:
        world['recovered'] = mother_comp.span.text    
    pass

r = requests.get(urlindia)
soup = BeautifulSoup(r.text, "html.parser")

b = soup.find_all("div", {"class": "maincounter-number"})

for i,mother_comp in enumerate(b,start=0):
    if i==0:
        india['totalcases'] = mother_comp.span.text

    if i==1:
        india['deaths'] = mother_comp.span.text

    if i==2:
        india['recovered'] = mother_comp.span.text    
    pass
final_dict = {}
final_dict["world"] = world
final_dict["india"] = india

print(final_dict)



