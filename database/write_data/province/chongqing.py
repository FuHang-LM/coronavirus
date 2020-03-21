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
        "CREATE TABLE chongqing("
        "txt varchar(100) not null , "
        "url varchar(200) not null , "
        "create_time timestamp DEFAULT CURRENT_TIMESTAMP,"
        "update_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"
        "id int not null auto_increment primary key)character set utf8 collate utf8_general_ci;"
    )
    con.commit()
    create.close()
    con.close()
    print('创建表完成')


def insertData(cons, txt, url):
    cue = cons.cursor()
    try:
        cue.execute(
            "INSERT INTO chongqing(txt, url) value (%s,%s)",
            [txt, url]
        )
    except Exception as e:
        print('Insert error:', e)
        con.rollback()
    else:
        con.commit()


def read():
    # filename = "../../reptile/txt_province/chongqing.txt"
    filename = "../reptile/txt_province/chongqing.txt"  # 脚本运行路径
    with open(filename, 'r', encoding='utf-8') as f:
        data_txt = f.readlines()
    for data in data_txt:
        # print(data)
        txt = data.strip().split(' ')
        data1 = txt[0]
        data2 = txt[1]
        insertData(con, data1, data2)
    con.close()
    print('重庆本地播报数据写入SQL完成！')


def format_data():
    cursor = con.cursor()
    cursor.execute("truncate table chongqing")
    # print('清楚表数据成功')
    con.commit()
    cursor.close()
    # con.close()


if __name__ == "__main__":
    # createTable()
    format_data()
    read()
