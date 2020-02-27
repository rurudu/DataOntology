import csv
import bisect
import sys
import time
import algos # Our algorithms file
## ALTERNATIVELY ##
# from algos import damerauLevenshteinDistance as levDist

# RUN INSTRUCTIONS:
# python run_tests.py [file.csv]

def main():
  filePath = sys.argv[1]
  with open(filePath, newline='') as f:
      reader = csv.reader(f)
      next(reader) # skip 1st line with header info
      data = list(reader)

  timePassed, inFirst, inTopThree, inTopTen = algos.runAlgo(algos.damerauLevenshteinDistance, data)

  printResults(filePath, len(data), timePassed, inFirst, inTopThree, inTopTen)


def printResults(filePath, numDataRows, time, top1, top3, top10):
  print("----------------------------------------------------------------")
  print("file:\t\t\t\t\t" + filePath)
  print("data size:\t\t\t\t" + str(numDataRows) + " rows")
  print("time elapsed:\t\t\t\t" + str(time) + " seconds")
  print("")
  print("correct label in first position:\t" + str(top1) + " / " + str(numDataRows))
  print("correct label in top three:\t\t" + str(top3) + " / " + str(numDataRows))
  print("correct label in top ten:\t\t" + str(top10) + " / " + str(numDataRows))
  print("----------------------------------------------------------------")

main()