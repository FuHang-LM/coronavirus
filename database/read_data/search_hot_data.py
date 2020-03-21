from config import db


class search_hot_data(db.Model):
    __tablename__ = "search_hot"
    id = db.Column(db.INTEGER, primary_key=True)
    title = db.Column(db.String)
    query = db.Column(db.String)
    url = db.Column(db.String)
    degree = db.Column(db.String)
    hotArrow = db.Column(db.String)
