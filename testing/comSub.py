import operator
import pandas as pd
import csv

def main():
    # dummy = ['abcdef', 'arcade', 'ppythoon', 'hoomebreew', 'westfforkk']
    # test = ['abcdef', 'aacde', 'eastfork', 'brewstal', 'typhoon']
    # print('hi')
    # print(sort(dummy, test))
    # filePath = 'sample_files/Reduced-Sample-File-01.csv'
    # with open(filePath) as f:
    #   reader = csv.reader(f)
    #   next(reader) # skip 1st line with header info
    #   data = list(reader)
    #   print(data)
    punctuation = ['(', ')', '?', ':', ';', ',', '.', '!', '/', '"', "'", ' ','a','e','i','o','u']
    dummy = []
    test = []
    with open('sample_files/denoised_data.csv') as f:
        reader = csv.reader(f)
        data = list(reader)
        #print(list(reader))
        #df = pd.read_csv('sample_files/denoised_data.csv')
    # data = list(df)
    # print(data)
    for i in range(len(data)):
        #ri = [char for char in data[i][0] if char not in punctuation]
        ri = data[i][1].translate(None, '/()\!@#$AEIOU-_. ')
        dummy.append(ri)
        #le = [char for char in data[i][1] if char not in punctuation]
        le = data[i][0].translate(None, '/()\!@#$AEIOU-_. ')
        test.append(le)
    #print(dummy)
    # right = list(df.SYNC)
    # for ri in right:
    #     ri = [char for char in ri if char not in punctuation]
    #     dummy.append(ri)
    # dummy = [x.strip(' ') for x in right]
    # left = list(df.QARSYNCH)
    # for le in left:
    #     le = [char for char in le if char not in punctuation]
    #     test.append(le)
    # print(test)
    dummyTested = sort(dummy, test)
    print(dummyTested)
    accuracy = []
    count = [0,0,0,0,0,0,0,0,0,0]
    for i in range(len(dummy)):
        for j in range(10):
            print(dummyTested[i])
            if dummyTested[i][1][j][0] == test[i]:
                #accuracy.append('true')
                count[j] += 1
            # else:
                #accuracy.append('false')
    print(len(dummy), count)




def sort(dummy, test):
    dummyTested = []
    # for each element in dummy, return a list of test elements in order of suggestion of similarity

    for dum in dummy:
        testRes = {}
        for tes in test:
            res = 0
            for i in range(len(dum) + 1): 
                LCSuff = [[0 for k in range(len(tes)+1)] for l in range(len(dum)+1)]                 
                for j in range(len(tes) + 1): 
                    if (i == 0 or j == 0): 
                        LCSuff[i][j] = 0
                    elif (dum[i-1] == tes[j-1]): 
                        LCSuff[i][j] = LCSuff[i-1][j-1] + 1
                        # if (LCSuff[i-1][j-1] != 0):
                        #     res +=1
                    else: 
                        LCSuff[i][j] = 0
                res += max(LCSuff[i])
            testRes[tes] = res
        sortedRes = sorted(testRes.items(), key=operator.itemgetter(1),reverse=True)
        #sortedRes = sorted(testRes.items(), key = lambda kv:(kv[1], kv[0]))
        dummyTested.append((dum,sortedRes[:15]))
    return dummyTested


if __name__=="__main__":       
    main() 