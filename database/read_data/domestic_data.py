from config import db


class domestic_data(db.Model):
    __tablename__ = "domestic"
    id = db.Column(db.INTEGER, primary_key=True)
    province = db.Column(db.String)
    add_diagnosis = db.Column(db.INTEGER)
    add_cure = db.Column(db.INTEGER)
    add_died = db.Column(db.INTEGER)
    add_curConfirm = db.Column(db.INTEGER)
    diagnosis = db.Column(db.INTEGER)
    cure = db.Column(db.INTEGER)
    died = db.Column(db.INTEGER)
    curConfirm = db.Column(db.INTEGER)

