from config import db


class summary_data(db.Model):
    __tablename__ = "summary"
    id = db.Column(db.INTEGER, primary_key=True)
    curConfirm = db.Column(db.INTEGER)
    curConfirmRelative = db.Column(db.INTEGER)
    curSuspected = db.Column(db.INTEGER)
    curSuspectedRelative = db.Column(db.INTEGER)
    curIcu = db.Column(db.INTEGER)
    curIcuRelative = db.Column(db.INTEGER)
    confirmed = db.Column(db.INTEGER)
    confirmedRelative = db.Column(db.INTEGER)
    cured = db.Column(db.INTEGER)
    curedRelative = db.Column(db.INTEGER)
    died = db.Column(db.INTEGER)
    diedRelative = db.Column(db.INTEGER)
