def test1():
    return True

def test2():
    return True

tests = [test1, test2]

error = False
for test in tests:
    if not test():
        error = True

if error:
    exit(1)

exit(0)