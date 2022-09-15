from flask import Flask, request, jsonify
import mysql.connector

mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='masterkey',
    database='python_base'
)

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

@app.route('/api/v1/carros', methods=['GET'])
def get_carros():
    mycursor = mydb.cursor() # recebe o banco de dados
    mycursor.execute("SELECT * FROM carros") # consulta
    myresult = mycursor.fetchall() 

    #criar uma lista para armazenar os dados com o nome dos campos
    carros = list()
    for item in myresult:
        carros.append({
            'id': item[0],
            'descricao': item[1],
            'marca': item[2],
            'modelo': item[3],
            'ano': item[4],
            'cor': item[5],
            'preco': item[6]
        })
    return jsonify(carros)




#Members API Route
#@app.route('/members')
#def members():
#    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == '__main__':
    app.run(debug=True)