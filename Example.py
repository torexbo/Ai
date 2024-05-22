# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image, ImageDraw, ImageFont

app = Flask(__name__)
CORS(app)

@app.route('/generate-poster', methods=['POST'])
def generate_poster():
    data = request.get_json()
    text = data['text']
    # Create a simple poster
    img = Image.new('RGB', (800, 600), color=(73, 109, 137))
    d = ImageDraw.Draw(img)
    d.text((10, 10), text, fill=(255, 255, 0))
    img_path = 'poster.png'
    img.save(img_path)
    return jsonify({'posterUrl': img_path})

if __name__ == '__main__':
    app.run(debug=True)
