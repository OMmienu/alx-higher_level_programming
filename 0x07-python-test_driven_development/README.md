0x07. Python - Test-driven development

Requirements


Python Scripts
1. Allowed editors: vi, vim, emacs
2. All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
3. All your files should end with a new line
4. The first line of all your files should be exactly #!/usr/bin/python3
5. A README.md file, at the root of the folder of the project, is mandatory
6. Your code should use the pycodestyle (version 2.)
7. All your files must be executable
8. The length of your files will be tested using wc


Python Test Cases

1. Allowed editors: vi, vim, emacs
2. All your files should end with a new line
3. All your test files should be inside a folder tests
4. All your test files should be text files (extension: .txt)
5. All your tests should be executed by using this command: python3 -m doctest ./tests/*
6. All your modules should have a documentation (python3 -c 'print(__import__("my_module").__doc__)')
7. All your functions should have a documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)')
8. A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
9. We strongly encourage you to work together on test cases, so that you don’t miss any edge case – The Checker is checking for tests!


0. Integers Addition
   Write a function that adds 2 integers.

Prototype: def add_integer(a, b=98):
a and b must be integers or floats, otherwise raise a TypeError exception with the message a must be an integer or b must be an integer
a and b must be first casted to integers if they are float
Returns an integer: the addition of a and b
You are not allowed to import any module


1. Divide a Matrix
Write a function that divides all elements of a matrix.

Prototype: def matrix_divided(matrix, div):
matrix must be a list of lists of integers or floats, otherwise raise a TypeError exception with the message matrix must be a matrix (list of lists) of integers/floats
Each row of the matrix must be of the same size, otherwise raise a TypeError exception with the message Each row of the matrix must have the same size
div must be a number (integer or float), otherwise raise a TypeError exception with the message div must be a number
div can’t be equal to 0, otherwise raise a ZeroDivisionError exception with the message division by zero
All elements of the matrix should be divided by div, rounded to 2 decimal places
Returns a new matrix
You are not allowed to import any module
