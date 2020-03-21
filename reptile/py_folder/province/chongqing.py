import json

import requests

url = 'https://opendata.baidu.com/data/inner?tn=reserved_all_res_tn&dspName=iphone&from_sf=1&dsp=iphone&resource_id=28565&alr=1&query=重庆新型肺炎最新动态'
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
}
response = requests.get(url, headers=headers)
response = response.text
response = response.encode('utf-8').decode('unicode_escape')
res = json.loads(response, strict=False)
data_all = res['Result'][0]['items_v2'][0]['aladdin_res']['DisplayData']['result']['items']
for i in range(len(data_all)):
    data = str(data_all[i]['eventDescription']).replace(' ', ',').strip() + ' ' + data_all[i]['eventUrl']
    # print(data)
    # txt = open('../../txt_province/chongqing.txt', 'a', encoding='utf-8')
    txt = open('../reptile/txt_province/chongqing.txt', 'a', encoding='utf-8')  # 脚本运行路径
    txt.write(data + '\n')
    txt.close()
print('重庆本地播报数据已更新')
