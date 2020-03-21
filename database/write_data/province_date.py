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
        "CREATE TABLE province_date("
        "province varchar(50) not null , "
        "one varchar(50) not null , "
        "two varchar(50) not null , "
        "three varchar(50) not null , "
        "four varchar(50) not null , "
        "five varchar(50) not null , "
        "six varchar(50) not null , "
        "seven varchar(50) not null , "
        "create_time timestamp DEFAULT CURRENT_TIMESTAMP,"
        "update_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,"
        "id int not null auto_increment primary key)character set utf8 collate utf8_general_ci;"
    )
    con.commit()
    create.close()
    con.close()
    print('创建表完成')


def insertData(cons, province, one, two, three, four, five, six, seven):
    cue = cons.cursor()
    try:
        cue.execute(
            "INSERT INTO province_date(province, one, two, three, four,five,six,seven) value (%s,%s,%s,%s,%s,%s,%s,%s)",
            [province, one, two, three, four, five, six, seven]
        )
    except Exception as e:
        print('Insert error:', e)
        con.rollback()
    else:
        con.commit()


def read():
    # filename = "../../reptile/txt_folder/province_date.txt"
    filename = "../reptile/txt_folder/province_date.txt"  # 脚本运行路径
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
        insertData(con, data1, data2, data3, data4, data5, data6, data7, data8)
    con.close()
    print('国内省份最近几周数据写入SQL完成')


def format_data():
    cursor = con.cursor()
    cursor.execute("truncate table province_date")
    # print('清楚表数据成功')
    con.commit()
    cursor.close()
    # con.close()


if __name__ == "__main__":
    # createTable()
    format_data()
    read()
