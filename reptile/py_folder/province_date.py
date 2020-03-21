import json
import re

import requests

url = 'https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_3&city=%E6%B9%96%E5%8C%97-%E6%B9%96%E5%8C%97'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
}

response = requests.get(url, headers=headers)
response = response.text
res = response.encode('utf-8').decode('unicode_escape')
res = re.findall('<script type="application/json" id="captain-config">(.*?)</script>', res)
html = json.loads(res[0], strict=False)

data_date = html['component'][0]['provinceTrendList']
date = str(data_date[0]['trend']['updateDate'][-43:][::7]).replace(',', ''). \
    replace('[', '').replace(']', '').replace('\'', '')
date = '省份' + ' ' + date
# txt = open('../txt_folder/province_date.txt', 'a', encoding='utf-8')
txt = open('../reptile/txt_folder/province_date.txt', 'a', encoding='utf-8')  # 脚本运行路径
txt.write(date + '\n')
txt.close()

for i in range(len(data_date)):
    name = data_date[i]['name']
    data_sum = data_date[i]['trend']['list']
    for j in range(len(data_sum)):
        # print(data_sum[j])
        if data_sum[j]['name'] == '确诊' and name != '台湾' and name != '香港' and name != '澳门':
            diagnosis = str(data_sum[j]['data'][-43:][::7]).replace(',', ''). \
                replace('[', '').replace(']', '')
            # print(name, diagnosis)
            data = name + ' ' + diagnosis

            # txt = open('../txt_folder/province_date.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/province_date.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(data + '\n')
            txt.close()
