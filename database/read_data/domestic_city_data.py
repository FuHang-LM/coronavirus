from config import db


class domestic_city_data(db.Model):
    __tablename__ = "domestic_city"
    id = db.Column(db.INTEGER, primary_key=True)
    province = db.Column(db.String)
    city = db.Column(db.String)
    add_diagnosis = db.Column(db.INTEGER)
    diagnosis = db.Column(db.INTEGER)
    cure = db.Column(db.INTEGER)
    died = db.Column(db.INTEGER)
    curConfirm = db.Column(db.INTEGER)
