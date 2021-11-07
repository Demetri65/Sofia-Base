import jsonlines
import re
def convert(filename):
    file = open(filename,'r')
    text = file.read()
    file.close()

    textL = text.split("\n\n")
    textL[:] = [x for x in textL if x]
    for i in range(len(textL)):
        textL[i] = textL[i].replace("_","")
    booknameMatch = re.search(r"([^\/]+$)",filename)
    bookName = booknameMatch.group()
    bookName=bookName[:-4]
    with jsonlines.open('Books/JSONL/'+bookName+'.jsonl', mode='w') as writer:
        for line in textL:
            writer.write({'text': line, 'metadata': ''})
def main():
    filename = "Books/TXT/The Will to Power, Friedrich Nietzsche.txt"
    convert(filename)
if __name__ == "__main__":
    main()