# -*- coding:utf-8 -*-


"""
本视图专门用于处理ajax数据
"""
import json

from flask import Blueprint

from config import db
from database.read_data.date_data import date_data
from database.read_data.domestic_city_data import domestic_city_data
from database.read_data.domestic_data import domestic_data
from database.read_data.global_data import global_data
from database.read_data.province.chongqing_data import chongqing_data
from database.read_data.province.hubei_data import hubei_data
from database.read_data.province_data import province_data
from database.read_data.real_time_data import real_time_data
from database.read_data.search_hot_data import search_hot_data
from database.read_data.summary_data import summary_data

data = Blueprint('data', __name__)


@data.route('/getGlobal', methods=['GET'])
def getGlobal():
    data_s = db.session.query(global_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    # print(data_s)
    view_data = {"serise": []}

    def build_view_data(item):
        tmp_dic = {"country": item.country,
                   "diagnosis": item.diagnosis,
                   "cure": item.cure,
                   "death": item.death,
                   "add_diagnosis": item.add_diagnosis}
        # tmp_dic["id"] = item.id
        view_data["serise"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    [print(x) for x in view_data["serise"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getDomestic', methods=['GET'])
def getDomestic():
    data_s = db.session.query(domestic_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    # print(data_s)
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"province": item.province,
                   "add_diagnosis": item.add_diagnosis,
                   "add_cure": item.add_cure,
                   "add_died": item.add_died,
                   "diagnosis": item.diagnosis,
                   "cure": item.cure,
                   "died": item.died,
                   "curConfirm": item.curConfirm,
                   "add_curConfirm": item.add_curConfirm,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getProvince', methods=['GET'])
def getProvince():
    data_s = db.session.query(province_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"province": item.province,
                   "one": item.one,
                   "two": item.two,
                   "three": item.three,
                   "four": item.four,
                   "five": item.five,
                   "six": item.six,
                   "seven": item.seven,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getSummary', methods=['GET'])
def getSummary():
    data_s = db.session.query(summary_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"curConfirm": item.curConfirm,
                   "curConfirmRelative": item.curConfirmRelative,
                   "curSuspected": item.curSuspected,
                   "curSuspectedRelative": item.curSuspectedRelative,
                   "curIcu": item.curIcu,
                   "curIcuRelative": item.curIcuRelative,
                   "confirmed": item.confirmed,
                   "confirmedRelative": item.confirmedRelative,
                   "cured": item.cured,
                   "curedRelative": item.curedRelative,
                   "died": item.died,
                   "diedRelative": item.diedRelative,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getSearch_hot', methods=['GET'])
def getSearch_hot():
    data_s = db.session.query(search_hot_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"title": item.title,
                   "query": item.query,
                   "url": item.url,
                   "degree": item.degree,
                   "hotArrow": item.hotArrow,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getDate_data', methods=['GET'])
def getDate_data():
    data_s = db.session.query(date_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"date": item.date,
                   "diagnosis": item.diagnosis,
                   "suspected": item.suspected,
                   "cured": item.cured,
                   "death": item.death,
                   "add_diagnosis": item.add_diagnosis,
                   "add_suspected": item.add_suspected,
                   "add_cured": item.add_cured,
                   "add_death": item.add_death,
                   "cur_diagnosis": item.cur_diagnosis,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    # [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getReal_time', methods=['GET'])
def getReal_time():
    data_s = db.session.query(real_time_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"txt": item.txt,
                   "url": item.url,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    # [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getDomestic_city', methods=['GET'])
def getDomestic_city():
    data_s = db.session.query(domestic_city_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"province": item.province,
                   "city": item.city,
                   "add_diagnosis": item.add_diagnosis,
                   "diagnosis": item.diagnosis,
                   "cure": item.cure,
                   "died": item.died,
                   "curConfirm": item.curConfirm,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    # [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getChongqing', methods=['GET'])
def getChongqing():
    data_s = db.session.query(chongqing_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"txt": item.txt,
                   "url": item.url,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    # [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getHubei', methods=['GET'])
def getHubei():
    data_s = db.session.query(hubei_data).all()
    # data_s = db.session.query(global_data).order_by(anhui_data.diagnosis.desc()).all()
    view_data = {"series": []}

    def build_view_data(item):
        tmp_dic = {"txt": item.txt,
                   "url": item.url,
                   }
        # tmp_dic["id"] = item.id
        view_data["series"].append(tmp_dic)

    [build_view_data(item) for item in data_s]
    # [print(x) for x in view_data["series"]]
    return json.dumps(view_data, ensure_ascii=False)

# @data.route('/getAnHui_Date', methods=['GET'])
# def getAnHui_Date():
#     data_s = db.session.query(anhui_date).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"date": item.date,
#                    "diagnosis": item.diagnosis,
#                    "cure": item.cure,
#                    "death": item.death,
#                    "add_diagnosis": item.add_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getAoMen', methods=['GET'])
# def getAoMen():
#     data_s = db.session.query(aomen_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getBeiJing', methods=['GET'])
# def getBeiJing():
#     data_s = db.session.query(beijing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getChongQing', methods=['GET'])
# def getChongQing():
#     data_s = db.session.query(chongqing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getFuJian', methods=['GET'])
# def getFuJian():
#     data_s = db.session.query(fujian_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getGanSu', methods=['GET'])
# def getGanSu():
#     data_s = db.session.query(gansu_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getGuangDong', methods=['GET'])
# def getGuangDong():
#     data_s = db.session.query(guangdong_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)

# @data.route('/getChongqing', methods=['GET'])
# def getChongqing():
#     data_s = db.session.query(chongqing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getAnHui', methods=['GET'])
# def getAnHui():
#     data_s = db.session.query(anhui_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getChongqing', methods=['GET'])
# def getChongqing():
#     data_s = db.session.query(chongqing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getAnHui', methods=['GET'])
# def getAnHui():
#     data_s = db.session.query(anhui_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getChongqing', methods=['GET'])
# def getChongqing():
#     data_s = db.session.query(chongqing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getAnHui', methods=['GET'])
# def getAnHui():
#     data_s = db.session.query(anhui_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getChongqing', methods=['GET'])
# def getChongqing():
#     data_s = db.session.query(chongqing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getAnHui', methods=['GET'])
# def getAnHui():
#     data_s = db.session.query(anhui_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
#
#
# @data.route('/getChongqing', methods=['GET'])
# def getChongqing():
#     data_s = db.session.query(chongqing_data).all()
#     print(data_s)
#     view_data = {"serise": []}
#
#     def build_view_data(item):
#         tmp_dic = {"city": item.city,
#                    "diagnosis": item.diagnosis,
#                    "death": item.death,
#                    "cure": item.cure,
#                    "add_diagnosis": item.add_diagnosis,
#                    "cur_diagnosis": item.cur_diagnosis}
#         # tmp_dic["id"] = item.id
#         view_data["serise"].append(tmp_dic)
#
#     [build_view_data(item) for item in data_s]
#     [print(x) for x in view_data["serise"]]
#     return json.dumps(view_data, ensure_ascii=False)
