from flask import Flask, request
import json

app = Flask(__name__, static_folder=".", static_url_path="")

@app.route("/registro", methods=["POST"])
def registro():
    nuevo = request.get_json()
    with open("usuarios.json", "r") as f:
        usuarios = json.load(f)
    usuarios.append(nuevo)
    with open("usuarios.json", "w") as f:
        json.dump(usuarios, f, indent=2)
    return "listo"

@app.route("/login", methods=["POST"])
def login():
    datos = request.get_json()
    with open("usuarios.json", "r") as f:
        usuarios = json.load(f)

    for u in usuarios:
        if u["username"] == datos["username"] and u["password"] == datos["password"]:
            return {"ok": True}

    return {"ok": False}


app.run()