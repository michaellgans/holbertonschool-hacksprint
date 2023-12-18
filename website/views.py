from flask import Blueprint, render_template
from flask_login import current_user


views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template("home.html", user=current_user)


@views.route('/checkout')
def checkout():
    return render_template("checkout.html")


@views.route('/orders')
def orders():
    return render_template("orders.html")
