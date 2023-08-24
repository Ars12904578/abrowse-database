import sqlite3
from flask import jsonify
def write(name, email, password):
    connection = sqlite3.connect('database.db')
    cur = connection.cursor()
    cur.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",(name, email, password))
    connection.commit()
    connection.close()
def delete(id):
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    delete_query = 'DELETE FROM users WHERE id = ?'
    cursor.execute(delete_query, (id,))
    connection.commit()
    connection.close()
def get_data(search):
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    query = f'SELECT {search} FROM users'
    cursor.execute(query)
    data = cursor.fetchall()
    connection.commit()
    connection.close()
    return data
def edit_id(id, username, email, password):
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    cursor.execute('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', (username, email, password, id))
    connection.commit()
    connection.close()