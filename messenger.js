document.getElementById('send_message').addEventListener('click', function() {
    FB.ui({
      method: 'send',
      link: 'https://your-landing-page-url.com',
      // You can customize the pre-filled message here
      message: 'Hello, I'm interested in your product!'
    });
  });
  