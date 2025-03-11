let queue = [];
        let isProcessing = false;

        function addMessage() {
            const message = document.getElementById('message').value;
            const delay = parseInt(document.getElementById('delay').value, 10);
            if (message && !isNaN(delay)) {
                queue.push({ message, delay });
                if (!isProcessing) {
                    processQueue();
                }
            }
        }

        function processQueue() {
            if (queue.length === 0) {
                isProcessing = false;
                return;
            }
            isProcessing = true;
            let { message, delay } = queue.shift();
            setTimeout(function() {
                console.log(message);
                document.getElementById('output').innerHTML += `<p>${message}</p>`;
                processQueue();
            }, delay);
        }