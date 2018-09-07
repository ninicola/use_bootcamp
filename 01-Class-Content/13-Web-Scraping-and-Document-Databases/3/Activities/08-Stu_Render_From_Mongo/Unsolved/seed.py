from flask import Flask, render_template

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
# app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create store_inventory`
db = client.store_inventory

# Drops collection if available to remove duplicates
db.produce.drop()

# Creates a collection in the database and inserts two documents
db.produce.insert_many(
    [
        {
            'type': 'apples',
            'cost': .23,
            'stock': 333,
        },
        {
            'type': 'strewberry',
            'cost': .60,
            'stock': 500,
        },
        {
            'type': 'mango',
            'cost': .34,
            'stock': 150,
        },
        {
            'type': 'guva',
            'cost': .65,
            'stock': 450,
        },
        {
            'type': 'peach',
            'cost': .98,
            'stock': 890,
        },
    ]
)
