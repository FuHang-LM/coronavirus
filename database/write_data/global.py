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
        "CREATE TABLE global("
        "country varchar(50) not null , "
        "diagnosis int(10) not null , "
        "cure int(10) not null , "
        "death int(10) not null , "
        "add_diagnosis int(10) not null , "
        "create_time timestamp DEFAULT CURRENT_TIMESTAMP,"
        "update_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"
        "id int not null auto_increment primary key)character set utf8 collate utf8_general_ci;"
    )
    con.commit()
    create.close()
    con.close()
    print('创建表完成')


def insertData(cons, country, diagnosis, cure, death, add_diagnosis):
    cue = cons.cursor()
    try:
        cue.execute(
            "INSERT INTO global(country, diagnosis, cure, death, add_diagnosis) value (%s,%s,%s,%s,%s)",
            [country, diagnosis, cure, death, add_diagnosis]
        )
    except Exception as e:
        print('Insert error:', e)
        con.rollback()
    else:
        con.commit()


def read():
    # filename = "../../reptile/txt_folder/global.txt"
    filename = "../reptile/txt_folder/global.txt"  # 脚本运行路径
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
    print('全球数据写入SQL完成')


def format_data():
    cursor = con.cursor()
    cursor.execute("truncate table global")
    # print('清楚表数据成功')
    con.commit()
    cursor.close()
    # con.close()


if __name__ == "__main__":
    # createTable()
    format_data()
    read()
