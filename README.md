SimpleChat
==========

How to install, build, and run (requires node v0.8.6 to build properly)

```bash
git clone git@github.com:adambom/messageme-simple-chat.git
cd messagme-simple-chat
npm install
sudo npm install -g grunt-cli
grunt production
sudo npm install -g http-server
http-server -p 9999 .
```

Your chat room is running on localhost:9999