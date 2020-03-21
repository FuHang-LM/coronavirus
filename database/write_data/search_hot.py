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
        "CREATE TABLE search_hot("
        "title varchar(20) not null , "
        "query varchar(30) not null , "
        "url varchar(300) not null , "
        "degree int(20) not null , "
        "hotArrow int(20) not null , "
        "create_time timestamp DEFAULT CURRENT_TIMESTAMP,"
        "update_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"
        "id int not null auto_increment primary key)character set utf8 collate utf8_general_ci;"
    )
    con.commit()
    create.close()
    con.close()
    print('创建表完成')


def insertData(cons, title, query, url, degree, hotArrow):
    cue = cons.cursor()
    try:
        cue.execute(
            "INSERT INTO search_hot(title, query, url, degree, hotArrow) value (%s,%s,%s,%s,%s)",
            [title, query, url, degree, hotArrow]
        )
    except Exception as e:
        print('Insert error:', e)
        con.rollback()
    else:
        con.commit()


def read():
    # filename = "../../reptile/txt_folder/search_hot.txt"
    filename = "../reptile/txt_folder/search_hot.txt"  # 脚本运行路径
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
        insertData(con, data1, data2, data3, data4, data5)
    con.close()
    print('热搜信息写入SQL完成！')


def format_data():
    cursor = con.cursor()
    cursor.execute("truncate table search_hot")
    # print('清楚表数据成功')
    con.commit()
    cursor.close()
    # con.close()


if __name__ == "__main__":
    # createTable()
    format_data()
    read()
