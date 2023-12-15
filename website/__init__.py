from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'sloane is the best girl ever'

    # Register the blueprints for the website
    from .views import views
    from .auth import auth

    # How to access the urls stored inside blueprint
    app.register_blueprint(views, url_previx='/')
    app.register_blueprint(auth, url_previx='/')

    return app
