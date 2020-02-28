import time
import bisect

# Comment
def findSimilarities(algorithm, data):
    inFirst, inTopThree, inTopTen = 0, 0, 0
    startTime = time.time()

    for r in range(len(data)):
        algoData = []
        fileLabel = data[r][1]

        for i in range(len(data)):
            bisect.insort(algoData, [algorithm(fileLabel, data[i][0]), str(data[i][0])])

        print("----------------------------------------------------------------")
        print("row:\t" + str(r+1) + " / " + str(len(data)))
        print("label:\t     " + fileLabel)
        first = False
        for i in range(len(data) if len(data) < 10 else 10):
            if (not first and algoData[i][1] == data[r][0]):
                if (i == 0): inFirst += 1
                if (i < 3): inTopThree += 1
                inTopTen += 1
                first = True
            print(str(i+1) + ":\t" + str(algoData[i]))
    print("")

    endTime = time.time()
    timePassed = endTime - startTime

    return timePassed, inFirst, inTopThree, inTopTen

# Description
# ANALYSIS / RUNNING STATS
def hammingDistance(s1, s2):
  return sum(c1 != c2 for c1, c2 in zip(s1, s2))

# Description
# ANALYSIS / RUNNING STATS
def damerauLevenshteinDistance(s1, s2):
  s2 = removeVowels(s2)
  d = {}
  lenstr1 = len(s1)
  lenstr2 = len(s2)
  for i in range(-1,lenstr1+1):
    d[(i,-1)] = i+1
  for j in range(-1,lenstr2+1):
    d[(-1,j)] = j+1

  for i in range(lenstr1):
    for j in range(lenstr2):
      if s1[i] == s2[j]:
        cost = 0
      else:
        cost = 1
      d[(i,j)] = min(
                      d[(i-1,j)] + 1, # deletion
                      d[(i,j-1)] + 1, # insertion
                      d[(i-1,j-1)] + cost, # substitution
                    )
      if i and j and s1[i]==s2[j-1] and s1[i-1] == s2[j]:
        d[(i,j)] = min (d[(i,j)], d[i-2,j-2] + cost) # transposition

  return d[lenstr1-1,lenstr2-1]

# Description
# ANALYSIS / RUNNING STATS
def diceCoefficient(s1, s2):
    """dice coefficient 2nt/(na + nb)."""
    a = str(s1.split())
    b = str(s2.split())

    if not len(a) or not len(b): return 0.0
    if len(a) == 1:  a=a+u'.'
    if len(b) == 1:  b=b+u'.'
    
    a_bigram_list=[]
    for i in range(len(a)-1):
      a_bigram_list.append(a[i:i+2])
    b_bigram_list=[]
    for i in range(len(b)-1):
      b_bigram_list.append(b[i:i+2])
      
    a_bigrams = set(a_bigram_list)
    b_bigrams = set(b_bigram_list)
    overlap = len(a_bigrams & b_bigrams)
    dice_coeff = overlap * 2.0/(len(a_bigrams) + len(b_bigrams))
    return 1 - dice_coeff

# Comment
def removeVowels(s):
  for i in range(len(s)):
    if (s[i] in ['a','e','i','o','u']):
      s = s.replace(str(i), "")
  return s