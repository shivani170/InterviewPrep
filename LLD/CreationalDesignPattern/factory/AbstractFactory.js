

class WindowButton {
    render(){
        console.log("window Button");
    }
}

class WindowCheckbox {
    render(){
        console.log("window Checkbox");
    }
}


class MacButton {
    render(){
        console.log("window Button");
    }
}

class MacCheckbox {
    render(){
        console.log("window Checkbox");
    }
}

class UILibrary {
    createButton(){

    }
    createCheckbox(){

    }
}
class WindowsFactory extends UILibrary {
    createButton(){
        return new WindowButton()
    }

    createCheckbox(){
        return new WindowCheckbox()
    }

}

class MacFactory extends UILibrary {
    createButton(){
        return new MacButton()
    }

    createCheckbox(){
        return new MacCheckbox()
    }

}

// Client Code

function createUI(factory){

   const button = factory.createButton()
   const checkbox = factory.createCheckbox()

  button.render()
  checkbox.render()

}

const windowFactory = new WindowsFactory()
createUI(windowFactory)