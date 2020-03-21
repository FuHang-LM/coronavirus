import json
import re

import requests

url = 'https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_3'
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
}
response = requests.get(url, headers=headers)
res = response.text
html = res.encode('utf-8').decode('unicode_escape')
html = re.findall('<script type="application/json" id="captain-config">(.*?)</script>', html)
data_json = json.loads(html[0], strict=False)
china = data_json['component'][0]['trend']['list']
# print(data_json.keys())
# print(data_json['component'][0].keys())
global_data = data_json['component'][0]['globalList']
for i in range(len(global_data)):
    data_subList = global_data[i]['subList']
    for j in range(len(data_subList)):
        data_all = data_subList[j]
        # print(data_all)
        if 'confirmedRelative' not in data_all:
            data_all['confirmedRelative'] = '0'
        if data_all['confirmed'] == '':
            data_all['confirmed'] = '0'
        if data_all['died'] == '':
            data_all['died'] = '0'
        if data_all['crued'] == '':
            data_all['crued'] = '0'
        if data_all['confirmedRelative'] == '':
            data_all['confirmedRelative'] = '0'

        data = str(data_all['country']) + ' ' + str(data_all['confirmed']) + ' ' + \
               str(data_all['crued']) + ' ' + str(data_all['died']) + ' ' + \
               str(data_all['confirmedRelative'])
        # print(data)
        # txt = open('../txt_folder/global.txt', 'a', encoding='utf-8')
        txt = open('../reptile/txt_folder/global.txt', 'a', encoding='utf-8')  # 脚本运行路径
        txt.write(data + '\n')
        txt.close()
# txt = open('../txt_folder/global.txt', 'a', encoding='utf-8')
txt = open('../reptile/txt_folder/global.txt', 'a', encoding='utf-8')  # 脚本运行路径
txt.write('中国' + ' ')
txt.close()
for i in range(len(china)):
    lis = ['新增确诊', '确诊', '治愈', '死亡']
    if china[i]['name'] in lis:
        # print(china[i])
        china_data = str(china[i]['data'][-1])
        # txt = open('../txt_folder/global.txt', 'a', encoding='utf-8')
        txt = open('../reptile/txt_folder/global.txt', 'a', encoding='utf-8')  # 脚本运行路径
        txt.write(china_data + ' ')
        txt.close()

print("全球数据已更新")
