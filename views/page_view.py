# -*- coding:utf-8 -*-
from flask import Blueprint, render_template

"""
本视图专门用于处理页面
"""
page = Blueprint('page', __name__)


@page.route('/', endpoint="index")
def login():
    return render_template("index.html")


@page.route('/global', methods=['GET'])
def global_1():
    return render_template("global.html")


# @page.route('/domestic', methods=['GET'])
# def domestic():
#     return render_template("domestic.html")


@page.route('/province/chongqing', methods=['GET'])
def chongqing():
    return render_template("province/chongqing.html")


@page.route('/province/hubei', methods=['GET'])
def hubei():
    return render_template("province/hubei.html")
