//Optim

//Request Animation Frame

function animate() {
	//something rad
	requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

//Quiz
setInterval(captureFrame.bind(self), 4);//BAD!!!!

requestAnimationFrame(captureFrame.bind(self), 4); //GOOD!!

//Now must also add call to requestAnimationFrame w/in captureFrame
var captureFrame = function() {
      canvas.drawImage(cameraVideo, sx /scaleFactor, sy/scaleFactor, sWidth/scaleFactor, sHeight/scaleFactor, dx, dy, dWidth, dHeight);
      //other cool stuff...
      requestAnimationFrame(captureFrame);
    };
//First WebWorker Quiz
//main.js
var worker = new Worker('scripts/worker.js');

worker.postMessage({'imageData':imageData,'type': type});
    worker.onmessage = function (e) {
      ctx.putImageData(e.data, 0, 0);
      console.log('sup');
    }
//worker.js
importScripts('imageManips.js');

this.onmessage = function(e) {
  var imageData = e.data.imageData;
  var type = e.data.type;

  postMessage(imageData);

 //QR code proj ... SUPER fun

var decodeWorker = new Worker('scripts/jsqrcode/qrworker.js'); // called in QR code Manger function

this.detectQRCode = function(imageData, callback) {
      //callback = callback || function() {};
      decodeWorker.postMessage(imageData);
      decodeWorker.onmessage = function(result) { //note entire message is result
        var url = result.data; //note result is a message object so to access need .data
        if(url !== undefined) {
          self.currentUrl = url;
        }
        callback(url);
      };

      decodeWorker.onerror = function(error) {
        function WorkerException(message) {
          this.name = "WorkerException";
          this.message = message;
        }
      }
    };

//Dom node array snippet
//Here's the helper function that I use instead of document.querySelectorAll.
//It creates an array of DOM nodes, which I think is useful because array methods
//like forEach() are pretty rad.
function getDomNodeArray(selector) {
// get the elements as a DOM collection
  var elemCollection = document.querySelectorAll(selector);

  // coerce the DOM collection into an array
  var elemArray = Array.prototype.slice.apply(elemCollection);

  return elemArray;
};

var divs = getDomNodeArray('div');









