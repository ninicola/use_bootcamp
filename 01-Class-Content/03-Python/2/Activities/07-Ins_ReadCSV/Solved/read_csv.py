# First we'll import the os module
# This will allow us to create file paths across operating systems
import os

# Module for reading CSV's
import csv

csvpath = os.path.join('..', 'Resources', 'Book2.csv')

# # Method 1: Plain Reading of CSVs
# with open(csvpath, 'r') as file_handler:
#     lines = file_handler.read()
#     print(lines)
#     print(type(lines))


# Method 2: Improved Reading using CSV module

with open(csvpath, newline='') as csvfile:

    # CSV reader specifies delimiter and variable that holds contents
    csvreader = csv.reader(csvfile, delimiter=',')

    print(csvreader)
station_list=[]
    #  Each row is read as a row
for row in csvreader:
    print(row)
    # t={}
    # for i in range(0,50,5):
    #     t['subject']=row[0]
    #     t['T1']=row[1]
    #     t['T2']=row[2]
    #     t['T3']=row[3]
    #     t['T4']=row[4]
    #     station_list.append(t)
# print(station_list)    
 
 