import requests

url = 'http://www.nhc.gov.cn/xcs/yqfkdt/gzbd_index.shtml'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}
response = requests.get(url, headers=headers)
print(response)
response = response.text

print(response)
