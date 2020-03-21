from config import db


class province_data(db.Model):
    __tablename__ = "province_date"
    id = db.Column(db.INTEGER, primary_key=True)
    province = db.Column(db.String)
    one = db.Column(db.String)
    two = db.Column(db.String)
    three = db.Column(db.String)
    four = db.Column(db.String)
    five = db.Column(db.String)
    six = db.Column(db.String)
    seven = db.Column(db.String)
