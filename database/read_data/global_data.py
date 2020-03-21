from config import db


class global_data(db.Model):
    __tablename__ = "global"
    id = db.Column(db.INTEGER, primary_key=True)
    country = db.Column(db.String)
    diagnosis = db.Column(db.INTEGER)
    cure = db.Column(db.INTEGER)
    death = db.Column(db.INTEGER)
    add_diagnosis = db.Column(db.INTEGER)
