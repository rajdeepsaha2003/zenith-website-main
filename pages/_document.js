import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="8ew6lZ1mNcVQ5rRnj3TovWrq6lmycRjh7I9r7a0-N0M" />
          <meta name="google-site-verification" content="-Ygl--qJPBmuSRluRItAYw6PiNYzGRkwhioBnApMPkI" />

          <script dangerouslySetInnerHTML={{
            __html: `
              window.FormExtension = {
                name: 'Forms',
                type: 'response',
                match: ({ trace }) => trace.type === 'Custom_Form' || trace.payload.name === 'Custom_Form',
                render: ({ trace, element }) => {
                  const formContainer = document.createElement('form');
                  formContainer.innerHTML = \`
                    <style>
                      label { font-size: 0.8em; color: #888; }
                      input[type="text"], input[type="email"], input[type="tel"], input[type="number"] {
                        width: 100%; border: none; border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
                        background: transparent; margin: 5px 0; outline: none; padding: 8px 0;
                      }
                      .phone, .age { width: 150px; }
                      .invalid { border-color: red; }
                      .submit {
                        background: linear-gradient(to right, #2e6ee1, #2e7ff1);
                        border: none; color: white; padding: 10px; border-radius: 5px;
                        width: 100%; cursor: pointer;
                      }
                    </style>
                    <label for="name">Name</label>
                    <input type="text" class="name" name="name" required><br><br>

                    <label for="email">Email</label>
                    <input type="email" class="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" title="Invalid email address"><br><br>

                    <label for="phone">Phone Number</label>
                    <input type="tel" class="phone" name="phone" required pattern="^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$" title="Please enter a valid phone number"><br><br>

                    <label for="age">Age</label>
                    <input type="number" class="age" name="age" required min="1" max="120" title="Please enter a valid age between 1 and 120"><br><br>

                    <input type="submit" class="submit" value="Submit">
                  \`;

                  formContainer.addEventListener('input', function () {
                    ['name', 'email', 'phone', 'age'].forEach(field => {
                      const input = formContainer.querySelector('.' + field);
                      if (input.checkValidity()) input.classList.remove('invalid');
                    });
                  });

                  formContainer.addEventListener('submit', async function (event) {
                    event.preventDefault();
                    const inputs = ['name', 'email', 'phone', 'age'].map(field => formContainer.querySelector('.' + field));
                    
                    if (inputs.some(input => !input.checkValidity())) {
                      inputs.forEach(input => input.classList.add('invalid'));
                      return;
                    }

                    console.log('hello'); // Log 'hello' on successful submission

                    formContainer.querySelector('.submit').remove();

                    const formData = Object.fromEntries(inputs.map(input => [input.name, input.value]));

                    // Dispatch a custom event with the form data
                    const customEvent = new CustomEvent('formSubmitted', { detail: formData });
                    document.dispatchEvent(customEvent);

                    window.voiceflow.chat.interact({
                      type: 'Response_Submitted',
                      payload: formData,
                    });

                    // Send data to Telegram
                    const telegramBotToken = '${process.env.TELEGRAM_BOT_TOKEN}';
                    const chatId = '${process.env.TELEGRAM_CHAT_ID}';

                    const messageLines = Object.entries(formData).map(([key, value]) => \`\${key}: \${value}\`);
                    const message = \`New form submission:\\n\\n\${messageLines.join('\\n')}\`;

                    console.log('Sending to Telegram:', {
                      url: \`https://api.telegram.org/bot\${telegramBotToken}/sendMessage\`,
                      body: { chat_id: chatId, text: message }
                    });

                    try {
                      const response = await fetch(\`https://api.telegram.org/bot\${telegramBotToken}/sendMessage\`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          chat_id: chatId,
                          text: message,
                        }),
                      });

                      if (!response.ok) {
                        throw new Error('Failed to send message to Telegram');
                      }

                      console.log('Message sent to Telegram successfully');
                    } catch (error) {
                      console.error('Error sending message to Telegram:', error);
                    }
                  });

                  element.appendChild(formContainer);
                },
              };
              console.log('FormExtension defined');
            `
          }} />
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  console.log('Voiceflow script loaded');
                  window.voiceflow.chat.load({
                    verify: { projectID: '66dd6913e86178552f18fabd' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    assistant: {
                      extensions: [window.FormExtension]
                    }
                  });
                  console.log('Voiceflow chat loaded');
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument