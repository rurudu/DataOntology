import csv
import bisect
import sys
import time
import algos # Our algorithms file
## ALTERNATIVELY ##
# from algos import damerauLevenshteinDistance as levDist

# RUN INSTRUCTIONS:
# python run_tests.py [algorithm name] ['file.csv']

def main():
  filePath = sys.argv[2]
  with open(filePath, newline='') as f:
      reader = csv.reader(f)
      next(reader) # skip 1st line with header info
      data = list(reader)
  
  algorithm = str(sys.argv[1])
  if (algorithm == 'lev'):
    timePassed, inFirst, inTopThree, inTopTen = algos.findSimilarities(algos.damerauLevenshteinDistance, data)
  if (algorithm == 'dice'):
    timePassed, inFirst, inTopThree, inTopTen = algos.findSimilarities(algos.diceCoefficient, data)

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