language-guesser
============

`language-guesser` is a command-line program that detects the language of a given text input and outputs the result.

Usage
-----

To use `lang-guesser`, you will need to provide it with some text input. You can do this by passing the text as an argument when running the program, like so:

```
node index.js "Hello World"

```

Copy

If no text is provided, the program will default to using the text `"Hello World"`.

Once you run the program, it will output the detected language of the provided text.

Dependencies
------------

`lang-guesser` uses the following dependencies:

-   franc: Used to detect the language of the provided text.
-   langs: Used to get information about the detected language.
-   colors: Used to display output in different colors.
