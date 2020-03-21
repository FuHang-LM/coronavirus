from config import db


class hubei_data(db.Model):
    __tablename__ = "hubei"
    id = db.Column(db.INTEGER, primary_key=True)
    txt = db.Column(db.String)
    url = db.Column(db.String)
