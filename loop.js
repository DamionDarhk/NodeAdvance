//psedu code to check event loop in node.js
// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperation = [];  //repreernt code/tasks that's being executed inside threadpool

//even by running below LOC timers, tasks & operation are being recorded
myFile.runcontents();

/*node does 3 seperate checks whether event loop(in our code it's while loop) will continue for another
iteration(re-executing code inside while loop) :-
check 1: check if any pending program needs to be executed by setTimeout, setInterval or setImmediate
check 2: check pending OS tasks(as in HTTP server listening to port)
check 3: check any long pending operation(like fs(file system) module) */
function shouldContinue() {
  return pendingTimers.length || pendingOSTasks.length || pendingOperation.length;
}

//entire while loop executes in 1 tick
/*below code shows what happens inside an event loop(body of an event loop), so to what happens inside event loop :-
1. Node look at pendingTimers(declared above) & see if any pending function needs to be called
(those function registered by setTimeout & setInterval)

2. Node look at pendingOSTasks & pendingOperation & return revalent callback

3. Node pause execution & continue when (in this case execution of code inside while loop is paused,
thus it doesn't run fast as it should) :-
 * new pendingOSTasks is done
 * new pendingOperation is done
 * new timers is about to complete

 4. Node call for pendingTimers (it look for setImmediate)

 5. Handle 'close' event (means whenever some function/program is about to close, a code is written(mainly clean-up code)
    before it close :-
    readStream.on('close'), () => {
      console.log('clean-up code meantioned here');
    })*/
while (shouldContinue()) {

}

//exit terminal
