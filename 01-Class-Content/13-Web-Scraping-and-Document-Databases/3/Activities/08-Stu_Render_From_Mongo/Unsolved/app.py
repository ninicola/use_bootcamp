from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection

conn = 'mongodb://localhost:27017'
# @TODO: connect to mongo db and collection
client = pymongo.MongoClient(conn)
db = client.store_inventory
# db.produce.drop()
# db.produce.insert_many(
#     [
#         {
#             'type': 'apples',
#             'cost': .23,
#             'stock': 333,
#         },
#         {
#             'type': 'strewberry',
#             'cost': .60,
#             'stock': 500,
#         },
#         {
#             'type': 'mango',
#             'cost': .34,
#             'stock': 150,
#         },
#         {
#             'type': 'guva',
#             'cost': .65,
#             'stock': 450,
#         },
#         {
#             'type': 'peach',
#             'cost': .98,
#             'stock': 890,
#         },
#     ]
# )


@app.route('/')
def index():
    # @TODO: write a statement that finds all the items in the db and sets it to a variable
    # CODE GOES HERE

        # Store the entire team collection in a list
        produces = list(db.produce.find())
        print(produces)

        # Return the template with the teams list passed in
        return render_template('index.html', produces=produces)
    # @TODO: render an index.html template and pass it the data you retrieved from the database



if __name__ == "__main__":
    app.run(debug=True)
