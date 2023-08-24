import sqlite3
import os
def removedata():
    file_path = 'database.db'
    os.remove(file_path)
    print(f"File '{file_path}' removed successfully.")
def createdata():
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        email TEXT,
        password TEXT
        );''')
    connection.commit()
    connection.close()