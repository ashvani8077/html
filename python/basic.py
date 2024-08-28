fullName="Sample Name"
age= 25
isStudent=True
hobbies=["reading", "coding","gaming"]
sampleTuple=(1,2,3)
print(fullName)
print(age)
print(isStudent)
print(hobbies)
print(sampleTuple)


#if elif

if age>18:
    print ("eligible to vote")
else:
    print("not eligible")


#single Line comment

'''
multi line comment
'''


#Iteration

students=["john","Mary","Peter","Jane","Tom"]
for student in students:
    print(student)

#iterate and display index
for index, student in enumerate (students):
    print(index)
    print(student)



#Dicationary

studentData={"Name":"John Doe",
             "age":25,
             "hobbies":["coding","reading","gaming"],
             "sTuple":(1,2,3),
             "sDict":{"name":"Due",
                      "age":34
                      }
             }

print (studentData)
print(studentData["Name"])

#Access Hobbies
for index, hoby in enumerate(studentData["hobbies"]):
    print(index, hoby)


