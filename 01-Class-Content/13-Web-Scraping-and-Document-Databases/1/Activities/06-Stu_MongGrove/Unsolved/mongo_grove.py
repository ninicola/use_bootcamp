import pymongo
import datetime

# The default port used by MongoDB is 27017
# https://docs.mongodb.com/manual/reference/default-mongodb-port/
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Define the 'fruits_db' database in Mongo
db = client.fruits_db

# Query all fruits_db

# Here, db.fruits refers to the collection 'fruits '
# fruits = db.fruits.find()
#declare the collection
collection=db.fruits_db


# Iterate through each fruit in the collection
# for fruit in fruits:
#     print(fruit)

# Insert a document into the 'fruits' collection
# db.fruits.insert_one(
#     {
#         'vendor name': 'Mary Lin',
#         'type of fruit': 1,
#         'quantity': '100',
#         'ripeness': 2,
#         'date':datetime.datetime.utcnow()
#     }
# )
#create a dictionary that represents the document to be inserted

post={ 'vendor' :'Mary Lin',
       'fruit':'raspberry',
        'quantity':100,
         'ripness':2,
         'date':datetime.datetime.utcnow()
       }
collection.insert_one(post)
# Update a document
# db.classroom.update_one(
#     {'name': 'Ahmed'},
#     {'$set':
#         {'row': 4}
#      }
# )
#part 2
#build a python script that asks the user for the above information
vendor=input('Please enter the vendor name:')
fruit_type=input('Type of the fruit:')
quantity=input('Number of boxes received:')
ripeness=input('Ripeness of fruit (1 is unripe;2 is ripe, 3 is over-ripe:)')

post={
      'vendor':vendor,
      'fruit':fruit_type,
      'quantity':quantity,
      'ripeness':ripeness,
      'date':datetime.datetime.utcnow()
}

# # Add an item to a document array
# db.classroom.update_one(
#     {'name': 'Ahmed'},
#     {'$push':
#         {'hobbies': 'Listening to country music'}
#      }
# )
#insert document into collection
collection.insert_one(post)
# verify the results:
results=db.fruit_db.find()
for result in results:
    print(result)
# # Delete a document from a collection
# db.classroom.delete_one(
#     {'name': 'Ahmed'}
# )
