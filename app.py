from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/activities')
def activity_page():
    return render_template('activities.html')


@app.route('/awards')
def awards_page():
    return render_template('awards.html')


@app.route('/keynote')
def keynote_page():
    return render_template('keynote.html')


@app.route('/meals')
def meals_page():
    return render_template('meals.html')


@app.route('/poll')
def poll_page():
    return render_template('poll.html')


@app.route('/registration')
def registration_page():
    return render_template('registration.html')


@app.route('/thankyou')
def thanks_page():
    return render_template('thankyou.html')


@app.route('/workshopschedule')
def schedule_page():
    return render_template('workshopschedule.html')


if __name__ == '__main__':
    app.run()
