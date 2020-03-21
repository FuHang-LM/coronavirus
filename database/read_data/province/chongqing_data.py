from config import db


class chongqing_data(db.Model):
    __tablename__ = "chongqing"
    id = db.Column(db.INTEGER, primary_key=True)
    txt = db.Column(db.String)
    url = db.Column(db.String)
