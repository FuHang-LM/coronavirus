import json
import re

import requests

url = 'https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_3#tab4'
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
}
response = requests.get(url, headers=headers)
response = response.text
response = response.encode('utf-8').decode('unicode_escape')
res = re.findall('<script type="application/json" id="captain-config">(.*?)</script>', response)
res = json.loads(res[0], strict=False)
date_data = res['component'][0]['trend']['list']
date = res['component'][0]['trend']['updateDate']
# print(date_data)
diagnosis = []
suspected = []
cured = []
death = []
add_diagnosis = []
add_suspected = []
add_cured = []
add_death = []
cur_diagnosis = []
for k in range(len(date_data)):
    name = date_data[k]['name']
    # print(name)
    data = str(date_data[k]['data']).replace('[', '').replace(']', '').replace(',', '').split()
    if name == '确诊':
        for a in data:
            diagnosis.append(a)
    if name == '疑似':
        for b in data:
            suspected.append(b)
    if name == '治愈':
        for c in data:
            cured.append(c)
    if name == '死亡':
        for d in data:
            death.append(d)
    if name == '新增确诊':
        for e in data:
            add_diagnosis.append(e)
    if name == '新增疑似':
        for f in data:
            add_suspected.append(f)
    if name == '新增治愈':
        for g in data:
            add_cured.append(g)
    if name == '新增死亡':
        for h in data:
            add_death.append(h)
# print(diagnosis)
# print(suspected)
# print(cured)
# print(death)
# print(add_diagnosis)
# print(add_suspected)
# print(add_cured)
# print(add_death)
for j in range(len(date)):
    a = int(diagnosis[j]) - int(cured[j]) - int(death[j])
    cur_diagnosis.append(a)
for i in range(len(date)):
    data_all = str(date[i]) + ' ' + str(diagnosis[i]) + ' ' + str(suspected[i]) + ' ' + str(cured[i]) + ' ' + str(
        death[i]) + ' ' + str(add_diagnosis[i]) + ' ' + str(add_suspected[i]) + ' ' + str(add_cured[i]) + ' ' + str(
        add_death[i]) + ' ' + str(cur_diagnosis[i])

    # txt = open('../txt_folder/date_data.txt', 'a', encoding='utf-8')
    txt = open('../reptile/txt_folder/date_data.txt', 'a', encoding='utf-8')  # 脚本运行路径
    txt.write(data_all + '\n')
    txt.close()
print('全国疫情趋势数据更新成功')
