
class Message {
  constructor (authorid, content, timestamp) {
    this.authorid = authorid;
    this.content = content;
    this.timestamp = timestamp;
  }
}

$(() => {

  const $msgForm = $('#msg-form');
  const $msgInput = $('#msg-input');
  const $chatBox = $('.chatbox');
  const $clearChat = $('.clear');

  function scrollToBottom () {
    $chatBox.animate({
      scrollTop: $chatBox[0].scrollHeight - $chatBox[0].clientHeight
    }, 0);
  }
  
  function getMessages () {
    $.get('/messages', data => {
      data.forEach(msg => showMessage(msg));
    });
  }
  
  $(() => {
    // REMOVE-START
    getMessages();
    scrollToBottom();
    
    $msgForm.on('submit', e => {
      e.preventDefault();
      // authorId is true for user
      const msg = new Message(1, $msgInput.val(), Date.now());
      postMessage(msg);
      showMessage(msg);
      $msgInput.val('');
      botResponse();
    });
  });

  
  $clearChat.on('click', () => {
    $.ajax({
      url: '/messages',
      type: 'DELETE',
      success: function (result) {
        console.log('success');
      }
    });
    $chatBox.html('');
  });
  
  function DateTimeFormat (timestamp) {
    const options = {hour: '2-digit', minute: '2-digit'};
    return new Date(Number(timestamp)).toLocaleDateString('en-US', options);
  }

  function postMessage (msg) {
    $.ajax({
      method: 'POST',
      url: '/messages',
      contentType: 'application/json',
      data: JSON.stringify(msg),
    });
  }

  
  function showMessage (msg) {
    const {authorid, content, timestamp} = msg;
    if (authorid === 1) {
      const $msgElement = $('<div class="p-5 bg-[rgb(204,255,204,0.8)] rounded-2xl max-w-[750px] my-2 mr-2 self-end whitespace-normal border border-3 border-green-800">');
      $chatBox.append($msgElement.html(`You: ${content} <span class="flex justify-self-end text-xs pt-2">sent ${DateTimeFormat(timestamp).toString()}</span>`));
      // scroll to the bottom of div - https://stackoverflow.com/questions/10503606/scroll-to-bottom-of-div-on-page-load-jquery
    } else if (authorid === 0) {
      const $botMsg = $('<div class="p-5 bg-[rgb(204,255,255,0.8)] rounded-2xl max-w-[750px] my-2 ml-2 self-start whitespace-normal border border-3 border-blue-800">');
      $chatBox.append($botMsg.html(`Bot: ${content} <span class="flex justify-self-end text-xs pt-2">sent ${DateTimeFormat(timestamp).toString()}</span>`));
    }
    scrollToBottom();
  
  }
  
  function botResponse () {
    setInterval(() => {
      $.get('https://cw-quotes.herokuapp.com/api/quotes/random',
        function (data, status) {
          // authorid is false for bot
          const msg = new Message(0, data.result.text, Date.now());
          postMessage(msg);
          showMessage(msg);
        });
    }, Math.floor(10000*Math.random()));
    scrollToBottom();
  }
      
});



