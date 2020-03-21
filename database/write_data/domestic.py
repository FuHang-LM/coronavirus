# coding=utf-8
import pymysql

con = pymysql.connect(
    host='localhost',
    port=3306,
    user='root',
    password='root',
    db='pneumonia_new',
    charset='utf8',
)


def createTable():
    create = con.cursor()
    create.execute(
        "CREATE TABLE domestic("
        "province varchar(50) not null , "
        "add_diagnosis int(10) not null , "
        "add_cure int(10) not null , "
        "add_died int(10) not null , "
        "add_curConfirm int(10) not null , "
        "diagnosis int(10) not null , "
        "cure int(10) not null , "
        "died int(10) not null , "
        "curConfirm int(10) not null , "
        "create_time timestamp DEFAULT CURRENT_TIMESTAMP,"
        "update_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"
        "id int not null auto_increment primary key)character set utf8 collate utf8_general_ci;"
    )
    con.commit()
    create.close()
    con.close()
    print('创建表完成')


def insertData(cons, province, add_diagnosis, add_cure, add_died, diagnosis, cure, died, curConfirm, add_curConfirm):
    cue = cons.cursor()
    try:
        cue.execute(
            "INSERT INTO domestic(province, add_diagnosis, add_cure, add_died, diagnosis, cure, died,curConfirm,add_curConfirm) value (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
            [province, add_diagnosis, add_cure, add_died, diagnosis, cure, died, curConfirm, add_curConfirm]
        )
    except Exception as e:
        print('Insert error:', e)
        con.rollback()
    else:
        con.commit()


def read():
    # filename = "../../reptile/txt_folder/domestic.txt"
    filename = "../reptile/txt_folder/domestic.txt"  # 脚本运行路径
    with open(filename, 'r', encoding='utf-8') as f:
        data_txt = f.readlines()
    for data in data_txt:
        # print(data)
        txt = data.strip().split(' ')
        data1 = txt[0]
        data2 = txt[1]
        data3 = txt[2]
        data4 = txt[3]
        data5 = txt[4]
        data6 = txt[5]
        data7 = txt[6]
        data8 = txt[7]
        data9 = txt[8]
        insertData(con, data1, data2, data3, data4, data5, data6, data7, data8, data9)
    con.close()
    print('国内省份数据写入SQL完成！')


def format_data():
    cursor = con.cursor()
    cursor.execute("truncate table domestic")
    # print('清楚表数据成功')
    con.commit()
    cursor.close()
    # con.close()


if __name__ == "__main__":
    # createTable()
    format_data()
    read()
