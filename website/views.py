from flask import Blueprint, render_template

views = Blueprint('views', __name__)

#Home Page
@views.route('/')
def home():
    return render_template("home.html")

@views.route('/checkout')
def checkout():
    return render_template("checkout.html")
