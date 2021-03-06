This is the completed exercise by Simon Chapman.

I have decided to complete the exercise in nodejs (javascript).

Whilst Python would have been my strongest language to use, I decided 
it would be practical to show my skills from this perspective, rather than
my strongest/most years in use.

I hope this wasn't a suicidal idea, and more a practical way of showing my
strengths.


Each problem has its own project

problem1 
problem2

I have answered all 4 questions in the root problem text files also, but you can run these at your leisure and also see the answers in their respective index.js files.

cd ./problem<n>
npm install

To see the tests, i have used mocha/chai and also nyc to perform coverage. As you will see coverage has been met at 100% of the helper.js functions that build up all the necessary for the problems at hand.

I also created a couple mock text files to be used in the tests to avoid running the full text samples within a test environment.

to run the tests simply run:
npm test

to run the actual problems to acquire their answers
node index.js


Final thoughts.. 

Problem1:
a good use of the 2sum and 3sum approach, inclusive of the little twist of the multiplication of the final numbers to give the answers. Naturally a good challenge, I used a hash object method to provide a better time complexity solution to the problem.

Problem2:
a good way to test skills when creating things such as logfiles or data manipulation. Very relevant to the position at hand, and good fun in providing the solutions. I did notice in the 3 sample solutions, there was one missing, a 4th option. I took the liberty of providing the solution inclusive of that; wasn't sure if you were looking for this, or if this was a trick to exclude or not. However felt as logic dictated it "should" be despite the supply of logical logline output, I decided to include regardless - this can be seen in my tests.


Many Thanks
Simon
