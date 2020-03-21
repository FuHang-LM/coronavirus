import json
import os
import re
import shutil

import requests


def response_data():
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
    summaryDataIn(data_json)
    data_all = data_json['component'][0]['caseList']
    domestic(data_all)
    province(data_all)


def summaryDataIn(data_json):
    summary = data_json['component'][0]['summaryDataIn']
    data = str(summary['curConfirm']) + ' ' + str(summary['curConfirmRelative']) + ' ' + \
           str(summary['unconfirmed']) + ' ' + str(summary['unconfirmedRelative']) + ' ' + \
           str(summary['icu']) + ' ' + str(summary['icuRelative']) + ' ' + \
           str(summary['confirmed']) + ' ' + str(summary['confirmedRelative']) + ' ' + \
           str(summary['cured']) + ' ' + str(summary['curedRelative']) + ' ' + \
           str(summary['died']) + ' ' + str(summary['diedRelative'])
    # txt = open('../txt_folder/summary.txt', 'a', encoding='utf-8')
    txt = open('../reptile/txt_folder/summary.txt', 'a', encoding='utf-8')  # 脚本运行路径
    txt.write(data + '\n')
    txt.close()


def domestic(data_all):
    for i in range(len(data_all)):
        # print(data_all[i])
        if data_all[i]['confirmed'] == '':
            data_all[i]['confirmed'] = '0'
        if data_all[i]['died'] == '':
            data_all[i]['died'] = '0'
        if data_all[i]['crued'] == '':
            data_all[i]['crued'] = '0'
        if data_all[i]['confirmedRelative'] == '':
            data_all[i]['confirmedRelative'] = '0'
        if data_all[i]['diedRelative'] == '':
            data_all[i]['diedRelative'] = '0'
        if data_all[i]['curedRelative'] == '':
            data_all[i]['curedRelative'] = '0'
        if data_all[i]['curConfirm'] == '':
            data_all[i]['curConfirm'] = '0'
        if data_all[i]['curConfirmRelative'] == '':
            data_all[i]['curConfirmRelative'] = '0'
        data = str(data_all[i]['area']) + ' ' + str(data_all[i]['confirmedRelative']) + ' ' + str(
            data_all[i]['curedRelative']) + ' ' + str(data_all[i]['diedRelative']) + ' ' + str(
            data_all[i]['confirmed']) + ' ' + str(data_all[i]['crued']) + ' ' + str(
            data_all[i]['died']) + ' ' + str(data_all[i]['curConfirm']) + ' ' + str(data_all[i]['curConfirmRelative'])
        # print(data)
        # txt = open('../txt_folder/domestic.txt', 'a', encoding='utf-8')
        txt = open('../reptile/txt_folder/domestic.txt', 'a', encoding='utf-8')  # 脚本运行路径
        txt.write(data + '\n')
        txt.close()


print("国内省份数据已更新")


# txt.close()
# print(data_all[i]['area'], data_all[i]['confirmedRelative'], data_all[i]['curedRelative'],
#       data_all[i]['diedRelative'], data_all[i]['confirmed'], data_all[i]['crued'],
#       data_all[i]['died'], data_all[i]['curConfirm'])


def province(data_all):
    lis = ['香港', '澳门', '台湾']
    for i in range(len(data_all)):
        # print(data_all[i]['confirmed'])

        if data_all[i]['area'] in lis:
            if 'confirmedRelative' not in data_all[i]:
                data_all[i]['confirmedRelative'] = '0'
            if 'curConfirm' not in data_all[i]:
                data_all[i]['curConfirm'] = '0'

            if data_all[i]['confirmed'] == '':
                data_all[i]['confirmed'] = '0'
            if data_all[i]['crued'] == '':
                data_all[i]['crued'] = '0'
            if data_all[i]['died'] == '':
                data_all[i]['died'] = '0'
            if data_all[i]['confirmedRelative'] == '':
                data_all[i]['confirmedRelative'] = '0'
            if data_all[i]['curConfirm'] == '':
                data_all[i]['curConfirm'] = '0'

            data = str(data_all[i]['area']) + ' ' + str(data_all[i]['area']) + ' ' + str(
                data_all[i]['confirmed']) + ' ' + str(data_all[i]['crued']) + ' ' + str(
                data_all[i]['died']) + ' ' + str(
                data_all[i]['confirmedRelative'] + ' ' + str(data_all[i]['curConfirm']))
            # print(data)
            # txt = open('../txt_folder/domestic_city.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/domestic_city.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(data + '\n')
            txt.close()
            # print(data_all[i])
        else:
            res = data_all[i]['subList']
            # print(res)
            # # print(len(res))
            for j in range(len(res)):
                if 'confirmedRelative' not in res[j]:
                    res[j]['confirmedRelative'] = '0'
                if 'curConfirm' not in res[j]:
                    res[j]['curConfirm'] = '0'

                if res[j]['confirmed'] == '':
                    res[j]['confirmed'] = '0'
                if res[j]['crued'] == '':
                    res[j]['crued'] = '0'
                if res[j]['died'] == '':
                    res[j]['died'] = '0'
                if res[j]['confirmedRelative'] == '':
                    res[j]['confirmedRelative'] = '0'
                if res[j]['curConfirm'] == '':
                    res[j]['curConfirm'] = '0'
                # print(res[j])
                #     # print(res[j]['city'] + ' ' + str(res[j]['confirmed']) + ' ' + str(res[j]['crued']) + ' ' + str(res[j]['died'])+' '+str(res[j]['curConfirm']))
                data_other = data_all[i]['area'] + ' ' + res[j]['city'] + ' ' + str(
                    res[j]['confirmedRelative']) + ' ' + str(res[j]['confirmed']) + ' ' + str(
                    res[j]['crued']) + ' ' + str(res[j]['died']) + ' ' + str(res[j]['curConfirm'])
                # print(data_other)
                # txt = open('../txt_folder/domestic_city.txt', 'a', encoding='utf-8')  #本身运行
                txt = open('../reptile/txt_folder/domestic_city.txt', 'a', encoding='utf-8')  # 脚本运行路径
                txt.write(data_other + '\n')
                txt.close()
    print("国内城市数据已更新")


if __name__ == "__main__":
    response_data()
