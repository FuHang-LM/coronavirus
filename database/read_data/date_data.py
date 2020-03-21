from config import db


class date_data(db.Model):
    __tablename__ = "date_data"
    id = db.Column(db.INTEGER, primary_key=True)
    date = db.Column(db.String)
    diagnosis = db.Column(db.INTEGER)
    suspected = db.Column(db.INTEGER)
    cured = db.Column(db.INTEGER)
    death = db.Column(db.INTEGER)
    add_diagnosis = db.Column(db.INTEGER)
    add_suspected = db.Column(db.INTEGER)
    add_cured = db.Column(db.INTEGER)
    add_death = db.Column(db.INTEGER)
    cur_diagnosis = db.Column(db.INTEGER)
