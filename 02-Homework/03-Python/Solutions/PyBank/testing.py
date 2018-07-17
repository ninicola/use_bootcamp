# -*- coding: UTF-8 -*-
"""Example"""

# Dependencies
import csv
import os

# Files to load and output (Remember to change these)
file_to_load = os.path.join("raw_data", "budget_data_1.csv")

# variables
total_months = 0

# Read the csv 
with open(file_to_load) as val_data:
    reader = csv.reader(revenue_data)

    # header row
    header = next(reader)
    print(header)
    total_months += 1

print(total_months)
