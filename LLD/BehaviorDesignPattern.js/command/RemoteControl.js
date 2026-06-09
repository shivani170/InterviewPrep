class LightOnCommand {
    execute(){
        console.log(`Light on`)
    }
}

class RemoteController {
    submit (command) {
        command.execute()
    }
}

const remoteCommand = new RemoteController()
remoteCommand.submit(new LightOnCommand())


// Client => Remote => LightOnCommand => exexcute