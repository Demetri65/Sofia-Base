.PHONY: client
client:
	bash -c "cd client && npm run start"

.PHONY: server
server:
	bash -c "cd server && npm run server"

.PHONY: run
run:
	make server & make client
