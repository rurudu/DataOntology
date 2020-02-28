import csv
import sys
import re

# RUNNING INSTRUCTIONS: 
# python denoise.py [input.csv] [output.csv]

def main():
    filePath = sys.argv[1]
    outPath = './testing/sample_files/DENOISE_TEMP_OUTPUT.csv'

    # If output path specified, write to it
    if len(sys.argv) == 3:
        outPath = sys.argv[2]

    with open(filePath, newline='') as f:
        reader = csv.reader(f)
        next(reader) # skip 1st line with header info
        data = list(reader)

        for row in data:
            # Use regex to keep only spaces and alphanumeric characters.
            # Then trim off leading/ending spaces and make sure everything
            # is uppercase.

            row[1] = row[1].replace('_', ' ')
            row[1] = re.sub('[^0-9a-zA-Z ]+', '', row[1]).strip().upper()

        with open(outPath, 'w') as t:
            writer = csv.writer(t, lineterminator='\n')
            for row in data:
                writer.writerow([row[0], row[1]])

main()