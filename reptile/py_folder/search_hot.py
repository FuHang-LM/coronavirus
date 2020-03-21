import json
import re

import requests

url = 'https://opendata.baidu.com/api.php?query=全国&resource_id=39258&tn=wisetpl&format=json'

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
}

response = requests.get(url, headers=headers)
# print(response.encoding)
# print(response.apparent_encoding)
response = response.text
# print(response)
html = json.loads(response, strict=False)
html_data = html['data'][0]['list']
# print(html_data)
for i in range(len(html_data)):
    # print(html_data[i]['title'])
    title = html_data[i]['title']
    news = html_data[i]['item']

    # print(news)
    for j in range(len(news)):
        # print(news[j]['query'], news[j]['url'], news[j]['degree'])
        if title == '今日疫情热搜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            search_today = title + ' ' + str(news[j]['query']).strip() + ' ' + str(
                news[j]['url']).strip() + ' ' + str(news[j]['degree']).strip() + ' ' + str(
                news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(search_today + '\n')
            txt.close()
            # print(search_today)
        if title == '防疫知识热搜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            pneumonia_knowledge = title + ' ' + str(news[j]['query']).strip() + ' ' + str(
                news[j]['url']).strip() + ' ' + str(news[j]['degree']).strip() + ' ' + str(
                news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(pneumonia_knowledge + '\n')
            txt.close()
            # print(pneumonia_knowledge)
        if title == '热搜谣言粉碎':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            rumor_smash = title + ' ' + str(news[j]['query']).strip() + ' ' + str(
                news[j]['url']).strip() + ' ' + str(news[j]['degree']).strip() + ' ' + str(
                news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(rumor_smash + '\n')
            txt.close()
            # print(rumor_smash)
        if title == '复工复课热搜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            resume_classes = title + ' ' + str(news[j]['query']).strip() + ' ' + str(
                news[j]['url']).strip() + ' ' + str(news[j]['degree']).strip() + ' ' + str(
                news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(resume_classes + '\n')
            txt.close()
            # print(resume_classes)
        if title == '热门人物榜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            hot_person = title + ' ' + str(news[j]['query']).strip() + ' ' + str(
                news[j]['describe']).strip() + ' ' + str(news[j]['degree']).strip() + ' ' + str(
                news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(hot_person + '\n')
            txt.close()
            # print(hot_person)
        if title == '游戏榜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            game = title + ' ' + str(news[j]['query']).strip() + ' ' + str(news[j]['url']).strip() + ' ' + str(
                news[j]['degree']).strip() + ' ' + str(news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(game + '\n')
            txt.close()
            # print(game)
        if title == '影视榜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            movies = title + ' ' + str(news[j]['query']).strip() + ' ' + str(news[j]['url']).strip() + ' ' + str(
                news[j]['degree']).strip() + ' ' + str(news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(movies + '\n')
            txt.close()
            # print(movies)
        if title == '小说榜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            novel = title + ' ' + str(news[j]['query']).strip() + ' ' + str(news[j]['url']).strip() + ' ' + str(
                news[j]['degree']).strip() + ' ' + str(news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(novel + '\n')
            txt.close()
            # print(novel)
        if title == '疫期飙升榜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            soar = title + ' ' + str(news[j]['query']).strip() + ' ' + str(news[j]['url']).strip() + ' ' + str(
                news[j]['degree']).strip() + ' ' + str(news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(soar + '\n')
            txt.close()
            # print(soar)
        if title == '历史热搜':
            if news[j]['hotArrow'] == '':
                news[j]['hotArrow'] = '1'
            soar = title + ' ' + str(news[j]['query']).strip() + ' ' + str(news[j]['url']).strip() + ' ' + str(
                news[j]['degree']).strip() + ' ' + str(news[j]['hotArrow']).strip()
            # txt = open('../txt_folder/search_hot.txt', 'a', encoding='utf-8')
            txt = open('../reptile/txt_folder/search_hot.txt', 'a', encoding='utf-8')  # 脚本运行路径
            txt.write(soar + '\n')
            txt.close()
            # print(soar)
print("热搜信息数据已更新")
