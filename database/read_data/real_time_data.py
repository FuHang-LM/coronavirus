from config import db


class real_time_data(db.Model):
    __tablename__ = "real_time"
    id = db.Column(db.INTEGER, primary_key=True)
    txt = db.Column(db.String)
    url = db.Column(db.String)
