import React from 'react'
import './chat.css'

export default function Chat() {
  return (
    <div>
        <div class="chat-container">
          <iframe
            class="chat-iframe"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/67b9eda2-bc50-4004-bd1a-f1ccc0018d26">
          </iframe>
        </div>
    </div>
  )
}
