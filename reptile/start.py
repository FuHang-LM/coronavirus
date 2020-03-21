import os
import shutil
import time


def del_file(filepath):
    """
    删除某一目录下的所有文件或文件夹
    :param filepath: 路径
    :return:
    """
    del_list = os.listdir(filepath)
    for f in del_list:
        file_path = os.path.join(filepath, f)
        if os.path.isfile(file_path):
            os.remove(file_path)
        elif os.path.isdir(file_path):
            shutil.rmtree(file_path)


def data_new():
    """最新数据获取"""
    os.system("python ../reptile/py_folder/domestic_data.py")
    os.system("python ../reptile/py_folder/global_data.py")
    os.system("python ../reptile/py_folder/province_date.py")
    os.system("python ../reptile/py_folder/search_hot.py")
    os.system("python ../reptile/py_folder/date_data.py")
    os.system("python ../reptile/py_folder/real_time.py")
    os.system("python ../reptile/py_folder/province/chongqing.py")
    os.system("python ../reptile/py_folder/province/hubei.py")


def write_sql():
    """数据写入数据库"""
    os.system("python ../database/write_data/domestic.py")
    os.system("python ../database/write_data/domestic_city.py")
    os.system("python ../database/write_data/global.py")
    os.system("python ../database/write_data/province_date.py")
    os.system("python ../database/write_data/summary.py")
    os.system("python ../database/write_data/search_hot.py")
    os.system("python ../database/write_data/date_data.py")
    os.system("python ../database/write_data/real_time.py")
    os.system("python ../database/write_data/province/chongqing.py")
    os.system("python ../database/write_data/province/hubei.py")


# txt = open('../database/write_data/domestic.py', 'a', encoding='utf-8')  # 脚本运行路径

if __name__ == "__main__":
    del_file('../reptile/txt_folder')  # 删除txt_folder文件夹下的所有文件
    del_file('../reptile/txt_province')  # 删除txt_folder文件夹下的所有文件
    data_new()
    time.sleep(1)
    write_sql()
